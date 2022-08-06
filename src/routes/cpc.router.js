const express = require('express');
const router = express.Router();
const { getAllCpcs, getCpcById, addCpc, deleteCpcById, updateCpcById } = require('../controllers/cpc.controllers');

router.get('/', getAllCpcs);
router.get('/:id', getCpcById);
router.post('/', addCpc);
router.delete('/:id', deleteCpcById);
router.patch('/:id', updateCpcById);

module.exports = router;
