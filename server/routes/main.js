const express = require('express')
const router = express.Router()
router.get('', (req, res)=>{
    // res.send('Hello node')
    const locals = {
        title: 'Nodejs Blog',
        description: 'Simple blog app build with nodejs, expressjs, ejs and mongodb'
    }
    res.render('index', {locals});
})
router.get('/about', (req, res)=>{
    // res.send('Hello node')
    res.render('about');
})

module.exports = router