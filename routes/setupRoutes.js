const express = require('express');
const setupController = require('../controllers/setupController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/get', setupController.get);
router.post('/save', setupController.save);
router.put('/update', setupController.update);


module.exports = router;