const express = require('express');
const categoryController = require('../controllers/categoryController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/getall', categoryController.getall);
router.post('/save', categoryController.save);
router.put('/update', categoryController.update);


module.exports = router;