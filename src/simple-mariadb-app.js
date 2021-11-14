// setup express handle
const express = require("express");

// create the application handle
const app = express();

// START application configuration section

// permet de gerer les inputs json (ex : postman)
app.use(express.json());
// permet de gerer les inputs à partir d'un formulaire
app.use(express.urlencoded({ extended: true }));

// simple greeting route
app.get("/", (request, response) => {
    //console.log("GET / requested");
    //console.log(request.query);
    let name = request.query.name || '';
    response.status(200).send(`<center><h1>Bienvenue ${name} </h1><br><h1>version 0.0.5</h1></center>`);
});
// simple greeting route
app.get("/de", (request, response) => {
    //console.log("GET / requested");
    //console.log(request.query);
    let name = request.query.name || '';
    response.status(200).send(`<center><h1>Willkomen ${name} </h1></center>`);
});

// add user route handler
const k8sroutes = require('./route/k8sroutes');
app.use('/',k8sroutes);

const usroutes = require('./route/usroutes');
app.use('/',usroutes);

// END application configuration section

// export the application
module.exports = app;