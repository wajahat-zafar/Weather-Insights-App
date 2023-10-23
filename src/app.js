const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
//public path,Template Path and Partials path
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs');
app.set('views', templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))


//Routing
app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render('weather');
});

app.get('*', (req,res)=>{
    res.render('404error', {
        errorMessage:'OOPS! This page not found.'
    })
 
})

app.listen(port, ()=>{
    console.log(`Listening at port: ${port}`)
})