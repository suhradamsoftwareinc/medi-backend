const express = require('express');
const suppliersController = require('../controllers/suppliersController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/get', suppliersController.get);
router.post('/save', suppliersController.save);
router.put('/update', suppliersController.update);


module.exports = router;