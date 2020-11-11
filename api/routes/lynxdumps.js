const express = require('express');
const router = express.Router();
const LynxDumpController = require('../controllers/lynxdumps');

router.post('/', LynxDumpController.dump_url);

module.exports = router;
