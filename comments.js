
//create a web server with express
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create an array to store the comments
let comments = [];

//create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//create a route to post a new comment
app.post('/comments', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

//start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});