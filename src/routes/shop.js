const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')();

router.post('/:id/buy', shopController.buy);
router.post('/:id/pricing', shopController.pricing);
router.post('/:id/receivement', shopController.receivement);

module.exports = router;
