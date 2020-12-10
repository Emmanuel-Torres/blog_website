const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Blog = require('./Models/Blog.js');

let blogs = [new Blog('Test Blog', 'Test Description', 'Test Category', '01/01/1961')];

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('Pages/Styles'));
app.use(express.static('Pages/Scripts'));
app.use(express.static('Pages/Images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/Index.html'));
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
});

app.get('/addBlog', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/AddBlog.html'));
});

app.post('/addblog', (req, res) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    blogs.push(new Blog(req.body.title, req.body.desc, req.body.category, today));
    console.log('Posted Succesfully added');
    res.redirect(301, '/');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/Pages/About.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})