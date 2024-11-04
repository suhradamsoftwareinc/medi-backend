const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.get('/get', inventoryController.get);
router.post('/save', inventoryController.save);
router.put('/update', inventoryController.update);


module.exports = router;