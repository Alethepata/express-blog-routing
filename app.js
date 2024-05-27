const express = require('express');
const app = express();
const port = 3000;

const { controllerPosts } = require('./controllers/postsController');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio blog</h1>`)
});
app.get('/posts', controllerPosts);

app.listen(port, () => {
    console.log('Server Online')
});
