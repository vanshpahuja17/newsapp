const express= require('express');
const app = express();
const bodyParser=require('body-parser');
const moment = require('moment');

app.locals.moment=moment;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}))

app.use('/',require('./routes/news'))

app.listen(3000, function(){
    console.log("Port is on 3000");
})