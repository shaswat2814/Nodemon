const express = require('express');

const app = express();
// console.dir(app);//methods which are ussed along with app object 

app.get("/",(req,res)=>{
    res.send("This is the home page!");
})
app.get("/cats",(req,res)=>{
    res.send("MEOW!!");
});

app.get("/dogs",(req,res)=>{
    res.send("WOOF!!");
});

app.get("/r/:subreddit/:postid",(req,res)=>{
    const {subreddit,postid} = req.params;
    res.send(`<h1>Browsing the ${postid} on the ${subreddit} system! </h1>`);
});

app.get("/search",(req,res)=>{
    const {q,rest} = req.query;
    if(!q){
        res.send("<h1>Nothing found if nothing searched</h1>");
    }
    res.send(`<h1>Search results for ${rest}`);
}); 

app.get("*",(req,res)=>{
    res.send(`We cannot get this route!`);
})

// app.use((req,res)=>{
//     console.log("we got a new request!");
//     // res.send("We got your request!");
//     res.send('<h1>this is my web page');
// })


app.listen(3000, () => {
    console.log("listening on port 3000");
});