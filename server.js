var requestLanguage = require('express-request-language');
var cookieParser = require("cookie-parser");
var express = require('express');
var app = express();

app.use(cookieParser());
app.use(requestLanguage({
    languages: ['en-EN', 'de-DE'],
    cookie: {
        name: 'language',
        options: {maxAge: 24*3600*1000},
        url: '/dist/{language}'
    }
}));

app.get('/', function(req, res, next) {
    console.log(req.language);
})

//app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(__dirname + '/dist'));

//app.get('*', (req, res) => {
//    res.status(200).sendFile(path.join(__dirname + '/dist/de-DE/index.html'))
//});

app.listen(process.env.PORT || 8080);