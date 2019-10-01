var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET live page. */
router.get('/live', function (req,res, next) {
    res.render('index', { title: 'Express live' });
});


/* GET p page. */
router.get('/o', function (req, res, next) {
    const pubFolder = 'C:/Users/Reiky/Desktop/node/Api/public/';
    const fs = require('fs');
    fs.readdir(pubFolder, (err, files) => {
        files.sort(() => Math.random() - 0.5);
        links = "";
        files.forEach(file => {
            if (file.endsWith(".mp4")) {
                link = "<a href=\"/" + file + "\" target=\"_blank\"><img src='" + file + ".jpg' width='420' height='240'  title='" + file + "'></a>";
                links += link;
            }
        });
        html = "<!DOCTYPE html><html><head><title>P</title><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"></head><body><p>" + links + "</p></body></html>";
        res.send(html);
    });
});

module.exports = router;