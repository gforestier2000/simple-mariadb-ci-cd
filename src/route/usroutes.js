// get express handler
const express = require('express');
// create a router
const router = express.Router();

// get the model handler
const Users = require("../model/utilisateur");


// setup the different CRUD route

// ADD a user
router.post("/users/", (request, response) => {
    console.log("POST /users/ requested");
    Users.saveUser(request.body.email, request.body.firstname, request.body.lastname,
        (err, res) => {
            if (err) return response.status(500).json(`FAILED to insert : ${err.message}`);
            return response.status(201).json(res);
        });
});

// GET all users
router.get("/users/", (request, response) => {
    console.log("GET /users/ requested");
    Users.findAllUsers((err, res) => {
        if (err) return response.status(500).json(`FAILED Select all user : ${err.message}`);
        return response.status(200).json(res);
    });
});

// GET a specific user by ID
router.get("/users/:id", (request, response) => {
    console.log("GET /users/:id requested");

    const id = request.params.id;

    Users.findOneUser(id, (err,res) =>{
        if (err) return response.status(500).json(`FAILED Select one user : ${err.message}`);
        if(res.length===0) return response.status(404).json(`UNKNOWN user ID`);
        return response.status(200).json(res);
    });
});

// DELETE a specific user by ID
router.delete("/users/:id", (request, response) => {
    console.log("DELETE /users/:id requested");

    const id = request.params.id;

    Users.deleteOneUser(id, (err,res) =>{
        if (err) return response.status(500).json(`FAILED Delete one user : ${err.message}`);
        if(res.affectedRows===0) return response.status(404).json(`UNKNOWN user ID`);
        return response.status(200).json(res);
    });
});

// UPDATE a specific user by ID
router.put("/users/:id", (request, response) => {
    console.log(`PUT /users/ ${request.params.id} requested :`);

    const id = request.params.id;

    Users.updateOneUser(request.params.id,request.body.email, request.body.firstname, request.body.lastname,
        (err, res) => {
            if (err) return response.status(500).json(`FAILED user update : ${err.message}`);
            return response.status(200).json(res);
        });
});



module.exports = router;