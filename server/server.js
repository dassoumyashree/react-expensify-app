const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // to register some m/w - something that runs for each request
//static takes path to the public folder

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); // sets up some function to run we someone makes get req to our server

app.listen(port, () => {
    console.log('Server is up!', port);
});