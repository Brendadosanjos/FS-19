const fs = require("fs")

// fs.readFile("index.html", "utf8", function (error, data){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// let data =`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>`

let data = "brenda@gmail.com"

fs.mkdir("./src/pasta", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})


fs.mkdir("./src/assets", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})

fs.mkdir("./src/controller", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})

fs.mkdir("./src/repository", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})

fs.mkdir("./src/router", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})

fs.mkdir("./src/services", {recursive:true}, function(error,data) {
    if (error) {
        console.log("errou")
    } else {
        console.log("deu certo")
    }
})

fs.writeFile("package.json", data, function(error, data){
    if (error) {
        console.log("errou");
    } else {
        console.log("deu certo");
    }
})