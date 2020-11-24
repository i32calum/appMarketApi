const {Router} = require('express');
const router = Router();

const { getMaxTimeStampByType } = require('../controllers/index.controller');

router.get('/maxFecha', getMaxTimeStampByType)

module.exports = router;
