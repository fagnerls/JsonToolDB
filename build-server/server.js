const express = require('express');
const expressApp = express();

expressApp.get('/test', (req, res) => res.status(200).send('success!'));

expressApp.listen(102001, () => {
    console.log('listening on *:3001');
});

export default expressApp;