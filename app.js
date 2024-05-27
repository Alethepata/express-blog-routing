const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts.js');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio blog</h1>`)
});

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log('Server Online')
});
