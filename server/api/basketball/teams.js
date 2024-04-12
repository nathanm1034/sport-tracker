const express = require('express');
const router = express.Router();
const { getNBATeams } = require('../../controller/basketball/teamsController');

router.get('/', getNBATeams);

module.exports = router;