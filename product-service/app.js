const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

mongoose.connect('mongodb://mongodb-service:27017/products', { useNewUrlParser: true });

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: "Product A" }, { id: 2, name: "Product B" }]);
});

app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
