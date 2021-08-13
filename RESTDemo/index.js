const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4 : uuid} = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'));

let comments = [
    {
        id:uuid(),
        username:'Shaswat',
        comment:'That is very funny'
    },
    {
        id:uuid(),
        username:'Mahendra',
        comment:'That is very beautiful'
    },
    {
        id:uuid(),
        username:'Shreyash',
        comment:'I would like to go on a trip'
    },
    {
        id:uuid(),
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
    comments.push({username,comment,id:uuid()});
    res.redirect("/comments");
});

app.get("/comments/:id",(req,res)=>{
    const{id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show",{comment});
});
app.get("/comments/:id/edit",(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id===id);
    res.render('comments/edit',{comment});
})
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const findComment = comments.find(c => c.id === id);
   
    findComment.comment = newCommentText;
    res.redirect('/comments');
    // console.log(id);
});


app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    // const foudndComment = comments.find(c => c.id===id);
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});