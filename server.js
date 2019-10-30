const express = require('express');
const app = express();

app.get('/api/echo/:text?', (req, res) => {

    let text = req.params.text;
    if(text)
        res.send(text);
    else
        res.send('Nothing? :-)');
});

app.listen(8000, () => {
    console.log('SIMPLE EXPRESS TEST API SERVER listening on port 8000...');
});



module.exports = app;