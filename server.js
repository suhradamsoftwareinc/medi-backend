const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const setupRoutes = require('./routes/setupRoutes');
const productRoutes = require('./routes/productRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const suppliersRoutes = require('./routes/suppliersRoutes');
const manufacturerRoutes = require('./routes/manufacturerRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const billRoutes = require('./routes/billRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use('/category', categoryRoutes);

app.use('/setup', setupRoutes);

app.use('/product', productRoutes);

app.use('/warehouse', warehouseRoutes);

app.use('/suppliers', suppliersRoutes);

app.use('/manufacturer', manufacturerRoutes);

app.use('/inventory', inventoryRoutes);

app.use('/bill', billRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT} "+PORT);
});