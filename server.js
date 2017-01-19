const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/dist/de-DE/index.html'))
});

app.use(express.static(__dirname + '/dist/de-DE'));



app.listen(process.env.PORT || 8080);