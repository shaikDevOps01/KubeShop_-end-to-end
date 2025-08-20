const express = require('express');
const app = express();
const PORT = 3003;

app.get('/orders', (req, res) => {
  res.json([{ id: 1, items: ["Product A"], status: "completed" }]);
});

app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
