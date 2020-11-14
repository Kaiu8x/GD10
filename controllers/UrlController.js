const { nanoid } = require('nanoid');
const Url = require('../models/Urls');

exports.store = (req, res) => {
  console.log("Storing url")
  let url = {};
  url.longUrl = req.body.longUrl;
  url.shortUrl = "http://localhost:4200/"+nanoid(5);
  url.shortUrl.replace('+','');
  Url.create(url).then((id) => {
    res.redirect('/')
  });
}

exports.match = (req, res) => {
  let redirectUrl = "http://localhost:4200/"
  redirectUrl += req.params.id
  if(redirectUrl.charAt(redirectUrl.length-1) === '+'){
      redirectUrl = redirectUrl.slice(0, -1)
      Url.find(redirectUrl).then((url) => {
          res.render('homepage/index', {urls: url});;
      })
  } else {
    Url.find(redirectUrl).then((url) => {
      console.log(url)
      if (url !== undefined) {
        let count = url.redirectCount
        count+= 1
        Url.clickUpdate(redirectUrl, count ).then(() => {
          res.redirect(url.longUrl)
        })
      }
    })
  }
}