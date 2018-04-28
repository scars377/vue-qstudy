const express = require('express');
const api = require('./api');

const app = express();

const PORT = 8081;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
app.use('/api', api);
