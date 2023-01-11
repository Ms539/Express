const express = require('express');
const app = express();
const port = 3000;
const current = new Date();
const day = current.getDay()

app.set('views', './views');
app.set('view engine', 'ejs');
//app.use(express.static('/public'));
app.use('/public', express.static('public'));

app.get('/',(req,res) =>{ 
    res.render('accueil')
});
app.get('/services',(req,res) =>{ 
    res.render('services')
});
app.get('/contact',(req,res) =>{ 
    res.render('contact')
});

app.listen(port, () => 
console.log(`Our application run : http://localhost:3000/`))