const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/assets', express.static(__dirname + 'public/assets'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/skills', (req, res) => {
    res.render('skills')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/socialmedia', (req, res) => {
    res.render('socialmedia')
})
app.get('/motion', (req, res) => {
    res.render('motion')
})
app.get('/logos', (req, res) => {
    res.render('logos')
})





app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})