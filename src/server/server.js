const express = require('express');
const path = require('path');

const app = express();

const port = 3888;

console.log(path.join(__dirname, '../client/public'));

app.use(express.static(path.join(__dirname, '../client/public/')));


app.listen(port, () => console.dir(`listening on ${port}`));
