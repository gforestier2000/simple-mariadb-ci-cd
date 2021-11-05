const express = require('express');
const router = express.Router();

router.get("/liveness", (request, response) => {
    
    console.log("GET /liveness");

    return response.status(200).json(`STILL ALIVE`);
});

router.get("/readiness", (request, response) => {
    
    console.log("GET /readiness");

    return response.status(200).json(`FULL READY`);
});


module.exports = router;