const router = require('express').Router()
const {Article} = require('../models')

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/articles', (req, res) => {
    Article.findAll()
        .then(articles => {
            res.render('articles/index', { articles })
        })
})

router.get('/articles/create', (req, res) => {
    res.render('articles/create')
})

router.post('/articles', (req, res) => {
    const { title, body } = req.body;
    Article.create({ title, body })
        .then(article => {
            res.redirect(`/articles/`)
        })
        .catch(err => {
            res.send(`Gagal membuat artikel, karena ${JSON.stringify(err.message, null, 2)}`)
        })
})

module.exports = router