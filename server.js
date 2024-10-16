const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const setupRoutes = require('./routes/setupRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use('/category', categoryRoutes);

app.use('/setup', setupRoutes);

app.use('/product', productRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT} "+PORT);
});