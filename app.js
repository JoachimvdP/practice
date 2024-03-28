const express = require('express'); 

// express app
const app = express(); 

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

// listen for a get request
app.get('/', (req, res) => {
    // res.send('<p>Hello</p>');
    res.render('index', { title: 'Home' });
})

app.get('/about', (req, res) => {
    // res.send('<p>About</p>');
    res.render('about'); 
})

app.get('/blogs/create', (req, res) => {
    res.render('create')
})

// redirects
app.get('about-me', (req, res) => {
    res.redirect('/about'); 
})

// 404 page (Moet onderaan staan)
app.use((req, res) => {
    res.status(404).render('404');
})