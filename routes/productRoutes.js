const express = require('express');
const productController = require('../controllers/productController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/get', productController.get);
router.post('/save', productController.save);
router.put('/update', productController.update);


module.exports = router;