const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const comments = [
    {
        username:'Shaswat',
        comment:'That is very funny'
    },
    {
        username:'Mahendra',
        comment:'That is very beautiful'
    },
    {
        username:'Shreyash',
        comment:'I would like to go on a trip'
    },
    {
        username:'Rishi',
        comment:'I want to the same, Shreyash!'
    }
]

app.get("/comments",(req,res)=>{
    res.render('comments/index',{comments});
});
 
app.get("/comments/new",(req,res)=>{
    res.render('comments/new');
});

app.post("/comments",(req,res)=>{
    const {username,comment} = req.body;
    comments.push({username,comment});
    res.redirect("/comments");
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});