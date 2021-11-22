const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = precoess.env.PORT || 5000;

app.use(bodyParser.json());
app.use(body.Parser.urlencoded({ extended : true}));

app.get('/api/hell', (req, res) => {
    res.send({message : 'Hello Express !'});
})

app.listen(port, () => console.log(`Listeing on port ${port}`));