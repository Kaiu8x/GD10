const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const urlController = require('../controllers/UrlController');

router.get('/', homepageController.index);

router.post('/urls', urlController.store);
router.get('/:id', urlController.match);


module.exports = router;
