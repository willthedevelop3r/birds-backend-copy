const express = require('express');
const router = express.Router();
const controller = require('./birds.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router.route('/generate').get(controller.getRandomBird).all(methodNotAllowed);
router.route('/:birdId').get(controller.read).all(methodNotAllowed);
router.route('/').get(controller.list).all(methodNotAllowed);

module.exports = router;
