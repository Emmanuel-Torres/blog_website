const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = 3000;
var Blog = require('./Models/Blog.js');

let blogs = [new Blog('title', 'Desc', Date.now())];

// app.use(express.static('Pages'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/index.html'));
});

app.get('/blogs', (req, res) => {
    //res.sendFile(path.join(__dirname+'/Pages/index.html'));
    res.send(blogs);
});

app.get('/addBlog', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/addblog.html'));
});

app.post('/addBlog', (req, res) => {
    // blogs.push(new Blog(req.query.title, req.query.desc, Date.now()));
    // res.send(req.body);
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})