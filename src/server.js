const express = require('express');
const app = express();
const path = require('path');

const api = require('./backend/apiFunc');

const PORT = process.env.PORT || 3000;

const staticPath = path.resolve(__dirname, '../public');
app.use('/static', express.static(staticPath));

app.get('/api', api.jsonApi);

app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});