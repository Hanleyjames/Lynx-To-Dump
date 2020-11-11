const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const lynxDumpRoutes = require('./routes/lynxdumps');
app.use(bodyParser.json());
app.get("/", function(req,res){
  res.status(200).json({
    message: "Server Alive"
  });
});

app.use('/lynxdumps', lynxDumpRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
