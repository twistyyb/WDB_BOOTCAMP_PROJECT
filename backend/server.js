const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// mock data
const data = [
  { id: 1, name: 'Darren' },
  { id: 2, name: 'Brandon' },
  { id: 3, name: 'Ich' },
];

let nextId = 4;

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend now!' });
});

// Example GET route
app.get('/api/data', (req, res) => {
  res.json({data});
});

// Example POST route
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  const newItem = {name: name, id: nextId++}
  data.push(newItem)

  res.json({
    message: 'Data received!',
    receivedData: { newItem },
  });
});

// Tells your backend to be listening to this PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
