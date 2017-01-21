var requestLanguage = require('express-request-language');
var cookieParser = require("cookie-parser");
var express = require('express');
var app = express();

app.use(cookieParser());
app.use(requestLanguage({
    languages: ['en-EN', 'de-DE'],
    cookie: {
        name: 'LOCALE_ID',
        options: {maxAge: 24*3600*1000},
        url: '/{LOCALE_ID}'
    }
}));

app.get('/', function(req, res, next) {
    console.log(req.LOCALE_ID);
})

//app.use(express.static(__dirname + '/dist'));

//app.get('*', (req, res) => {
//    res.status(200).sendFile(path.join(__dirname + '/dist/de-DE/index.html'))
//});

app.listen(process.env.PORT || 8080);