var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET p page. */
router.get('/o', function (req, res, next) {
    var pubFolder = __dirname + '/../public/';
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

/* Get dir page. */
router.get('/:dir', function (req, res, next) {
    var dir = req.params.dir;
    console.log(dir);
    var pubFolder = __dirname + '/../public/' + dir;
    const fs = require('fs');
    fs.readdir(pubFolder, (err, files) => {
        let links = "";
        try {
            files.forEach(file => {
                link = "<a href=\"/" + dir + "/" + file + "\" target=\"_blank\">" + file + "</a><br>";
                links += link;
            });
            html = "<!DOCTYPE html><html>" +
                "<head>" +
                "<title>" + dir + "</title>" +
                "<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">" +
                "</head>" +
                "<body><p>" + links + "</p></body>" +
                "</html>";
            res.send(html);
        } catch (e) {
            res.send("Error");
        }
    });
});

module.exports = router;
