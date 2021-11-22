const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
let runningMessage = 'Server is running on port ' + port;
const webfolder = 'dist';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

app.use(express.static(webfolder));
app.get('*', (rrq, res) => {
  res.sendfile(`index.html`, {root: webfolder});
});

const server = app.listen(port, () => {
  console.log(runningMessage);
});

module.exports = server;
