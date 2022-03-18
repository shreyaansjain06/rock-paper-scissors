const express= require('express');
const path=require('path');
const port =process.env.PORT || 8000;
const data = require('./data.json') 
const url = require('url');
const app = express();
app.use(express.static(path.join(__dirname,"assets")))
app.set('view engine','ejs')
app.get('/', (req,res)=>{
    const params =req.query;
    // console.log(params)
    res.render('home',{data:data,params:params});
})
app.get('/click/:id', (req,res)=>{
    const id = req.params.id;
    const randomElement = data[Math.floor(Math.random() * data.length)];
    const computerId=randomElement.id;
    const pathname='/?';
    const components ={
        id:id,
        computerId:computerId
    }
    const urlParameters = new URLSearchParams(components)
    // console.log(urlParameters)
    res.redirect(pathname+urlParameters)
})
app.listen(port,()=>{
    console.log('listening on port',port);
})
