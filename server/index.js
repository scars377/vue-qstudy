const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();

const PORT = 8081;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
app.use(cors());
app.use('/api', api);
