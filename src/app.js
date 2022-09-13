const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();
const pathdirectory = path.join(__dirname, '../public');
const partialsdirectory = path.join(__dirname, '../templates/partials');
const viewsdirectory = path.join(__dirname, '../templates/views');




app.set('view engine', 'hbs');
app.set('views', viewsdirectory);

app.use(express.static(pathdirectory))
hbs.registerPartials(partialsdirectory)

app.get('', (req, res) => {
    res.render('index', {
        title:'lavan'
    })
})

app.get('/lavan', (req, res) => {
    
    res.send([{
        name:'lavan',
        age:'24',
        sex: req.query.get
    },{
        name:'kiran',
        age:'26'
    }])
})

app.get('/weather', (req, res) => {
    res.send('hello weather')
})

app.listen(3000, () => {
    console.log('running on port 3000');
})