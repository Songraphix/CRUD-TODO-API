const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build CRUD API', completed: false },
  { id: 3, task: 'Test API', completed: false },
  { id: 4, task: 'Deploy API', completed: true }
];

//  GET All Todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

//  GET Single Todo by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.status(200).json(todo);
});

//  POST: Create New Todo with validation
app.post('/todos', (req, res) => {
  const { task, completed } = req.body;

  if (!task) {
    return res.status(400).json({ error: 'Task field is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    completed: completed ?? false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//  PATCH: Update Todo
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  Object.assign(todo, req.body);
  res.status(200).json(todo);
});

//  DELETE: Remove Todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const existing = todos.find(t => t.id === id);

  if (!existing) return res.status(404).json({ error: 'Todo not found' });

  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

//  Bonus: GET Active (not completed)
app.get('/todos/active', (req, res) => {
  const activeTodos = todos.filter((t) => !t.completed);
  res.status(200).json(activeTodos);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error!' });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
