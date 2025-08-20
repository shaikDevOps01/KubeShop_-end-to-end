const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3004;

const SECRET_KEY = 'your-secret-key';

app.post('/login', (req, res) => {
  const token = jwt.sign({ userId: 123 }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/profile', (req, res) => {
  res.json({ userId: 123, name: "John Doe" });
});

app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
