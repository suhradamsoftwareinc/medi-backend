const express = require('express');
const manufacturerController = require('../controllers/manufacturerController');

const router = express.Router();

router.get('/get', manufacturerController.get);
router.post('/save', manufacturerController.save);
router.put('/update', manufacturerController.update);


module.exports = router;