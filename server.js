const express = require('express');
const app = express();
const port= process.env.PORT || 6700;

// To tell app, where static files -html/css/js- are stored, so that it can serve them to the client
app.use(express.static("frentend"));

app.listen(port, function() {
  console.log("App running on http://localhost:" + port);
});