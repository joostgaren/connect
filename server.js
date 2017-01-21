const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/de-DE'));

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/dist/de-DE/index.html'))
});

app.listen(process.env.PORT || 8080);