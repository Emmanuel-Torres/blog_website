const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
var Blog = require('./Models/Blog.js');

let blogs = [new Blog('title', 'Desc', Date.now())];

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('Pages/Styles'));
app.use(express.static('Pages/Scripts'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/index.html'));
});

app.get('/blogs', (req, res) => {
    //res.sendFile(path.join(__dirname+'/Pages/index.html'));
    res.send(blogs);
});

app.get('/addBlog', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/addblog.html'));
});

app.post('/addblog', (req, res) => {
    blogs.push(new Blog(req.body.title, req.body.desc, Date.now()));
    res.redirect(200, '/blogs');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})