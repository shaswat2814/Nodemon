const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));//joins the views directory with the folder in which index.js is established with the views directory so that we can call the application from anywhere without getting error on the views directory
app.use(express.static(path.join(__dirname,'/public')));//middleware

app.get("/",(req,res)=>{
    // res.send("hello");
    res.render('home');
});

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random',{num : num});
});

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit',{subreddit});
});

app.get('/cats',(req,res)=>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephen', 'Winston'];
    res.render('cats',{cats});
})
app.listen(3000,()=>{
    console.log("Listening on Port 3000");
});