const express = require('express');
const app = express();
const PORT = 3002;

app.get('/cart', (req, res) => {
  res.json([{ id: 1, items: ["Product A"] }]);
});

app.listen(PORT, () => console.log(`Cart service running on port ${PORT}`));
