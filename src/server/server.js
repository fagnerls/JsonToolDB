

const express = require('express');
const expressApp = express();

const user = require("../database/databaseService");

expressApp.get('/test', (req, res) => res.status(200).send('success!'));



expressApp.get("/users", function(request, response) {
  user.listUser();
  response.status(200).send('success!');

});





expressApp.listen(9001, () => {
    console.log('listening on *:9001');
});

//export default expressApp;
