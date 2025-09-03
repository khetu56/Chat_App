const mongoose = require('mongoose');
const Chat= require("./models/chat.js");

main()
.then(()=>{
    console.log("connection sucessful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
{
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at:new Date()
    },
    {
    from:"preeti",
    to:"riya",
    msg:"teach me Js callbacks",
    created_at:new Date()
    },

    {
    from:"amit",
    to:"sumit",
    msg:"all the best",
    created_at:new Date()
    },

    {
    from:"ankita",
    to:"sudipa",
    msg:"how arte you doing",
    created_at:new Date()
    },

    {
    from:"rohit",
    to:"pankaj",
    msg:"bring me fruits",
    created_at:new Date()
    },

]
Chat.insertMany(allChats);