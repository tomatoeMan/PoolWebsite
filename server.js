const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname,"css")));
app.use(express.static(path.join(__dirname,"img")));
app.use(express.static(path.join(__dirname)));

app.get("/",async(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"homePage.html"));
    console.log("Home page sent");
});

app.get("/quote",async(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"onlineQuote.html"));
    console.log("Quote page sent");
});

app.get("/contact",async(req,res)=>
{
    res.sendFile(path.resolve(__dirname,("about.html")));
    console.log("About page sent");
});

app.listen(4010);