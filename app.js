const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));

app.use('/static', express.static('static'));
app.use(express.urlencoded());



app.get('/',(req, res)=> {
        res.status(200).render('index.pug');
});
app.get('/about',(req, res)=> {
    res.status(200).render('about.pug');
});

app.listen(port,()=>{
    console.log(`started successfully  On Port ${port}`);
});