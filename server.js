const express = require("express");
const path = require("path");

const app = express();

let options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg','json'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: false
}

app.use(express.static("build",options));

app.listen(process.env.PORT || 3000,()=>{
    console.log("App listenning...");
});