const express = require("express");

const app = express();

const employees = [
    {
        id:1,
        name:"Shiraslan",
        age:30,
        salary:500
    },
    {
        id:2,
        name:"Shirali",
        age:32,
        salary:600
    },
    {
        id:3,
        name:"Shirin",
        age:35,
        salary:700
    }
]

app.get("/",(req,res)=> {
    res.send("Welcome")
})

app.get("/employees/",(req,res)=> {
    res.send(employees)
})

app.get("/employees/:id",(req,res)=> {
    const employee = employees.find(item=> item.id == req.params.id);
    res.send(employee);
})

app.listen(8080,() =>{
    console.log("Server ishe dushdu :)");
})