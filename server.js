const express = require('express');
const app = express();
const port = process.env.PoRT || 6700;

app.use(express.static('frentend'));

app.listen(port,function(){
    console.log("App running on http://localhost:" + port);
});