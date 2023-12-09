const express = require('express');
const { getAllCryptoData } = require('../controllers/crypto.controllers');

const router = express.Router();

router.get('/', getAllCryptoData);


module.exports = router;

