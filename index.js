const Express = require("express");
const express = Express();
const fs = require("fs");
const path = require("path");

express.use(function(req, res, next) {
    // Getting the raw body of a request for client saving
    if (req.originalUrl.includes('/fortnite/api/cloudstorage/user/')) 
        req.rawBody = '';
        req.setEncoding('latin1');

        
});
express.use(Express.json());
express.use(Express.urlencoded({ extended: true }));
express.use(Express.static('public'));



const port = process.env.PORT || 3551;
express.listen(port, console.log("HeartiumServer Started Listening on port", port));


if (!fs.existsSync(path.join(process.env.LOCALAPPDATA, "HeartiumServer"))) fs.mkdirSync(path.join(process.env.LOCALAPPDATA, "HeartiumServer"));

// keep this at the end of the code thanks
express.all("*", async (req, res) => {
    

    res.set({
        
        
    });

    res.status(404);
    res.json({
        

        
        
    });
    res.end();
});

