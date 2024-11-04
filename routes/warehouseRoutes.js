const express = require('express');
const warehouseController = require('../controllers/warehouseController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/get', warehouseController.get);
router.post('/save', warehouseController.save);
router.put('/update', warehouseController.update);


module.exports = router;