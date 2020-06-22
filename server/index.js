const express = require('express');
const app = express();
const routes = require('./src/routes/crud-route');
const mongoService =require('./src/dataaccess/dataaccess');
const port = 4002;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(routes);

mongoService.connect().then(()  => {
    app.listen(port,() => {
        console.log('app is listening on port: ', port);
        });
}).catch(err => {
 console.log('mongo connection failed');
});


