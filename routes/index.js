var express = require('express');
var router = express.Router();
const listController = require('../controllers/listController');

/* GET home page. */
router.get('/', listController.getList);
router.post('/', listController.makeItem);

router.post('/delete', listController.deleteItem);
router.post('/update', listController.updateItem);

module.exports = router;
