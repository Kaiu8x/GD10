const Url = require('../models/Urls');
exports.index = (req, res) => {
  let urls = Url.last().then((urls) => {
    res.render('homepage/index', {urlsCreated: urls});
  });
}
