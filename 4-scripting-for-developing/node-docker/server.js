const express = require('express');
const app = express();
const port = process.env.PORT || 4005;
let runningMessage = 'Server is up SK8 and  running on port ' + port + 'in Docker with changes.';

app.get('/', (req, res) =>{
    console.log('API was successfully requested');
    res.send(runningMessage);   
});
const server = app.listen(port, () =>{
    console.log(runningMessage);
});

module.exports = server;
