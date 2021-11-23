const express = require('express');
const app = express();
const port = process.env.PORT || 4005;
let runningMessage = 'Server is up and running on port ' + port + ' thanks for visiting me!';

app.get('/', (req, res) =>{
    console.log('API was successfully requested w00t!');
    res.send(runningMessage);
});


const server = app.listen(port, () => {
    console.log(runningMessage);
});

module.exports = server;
