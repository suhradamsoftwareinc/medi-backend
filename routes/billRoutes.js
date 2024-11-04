const express = require('express');
const billController = require('../controllers/billController');

const router = express.Router();

router.get('/get', billController.get);
router.post('/save', billController.save);
router.put('/update', billController.update);


module.exports = router;