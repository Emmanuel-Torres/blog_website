import { time } from 'console';
import express from 'express'
import {Blog} from './Models/Blog.mjs'

const app = express();
const port = 3000;

let blogs = [new Blog('title', 'Desc', Date.now())];

app.use(express.static('Pages'));

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.get('/post', (req, res) => {
    res.send(blogs);
});

app.get('/addPost', (req, res) => {
    blogs.push(new Blog(req.query.title, req.query.desc, Date.now()));
    res.send('post added');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})