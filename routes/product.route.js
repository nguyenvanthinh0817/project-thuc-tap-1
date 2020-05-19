var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controller');

router.get('/', controller.index);

router.get('/search', controller.search);



router.get('/create', controller.create);


router.get('/:id', controller.view);

router.get('/update/:id', controller.update);


///////////////////////////////////////////////////

router.post('/create', controller.postCreate);
router.post('/update/:id', controller.postUpdate);
router.post('/delete/:id', controller.postDelete);


module.exports = router;