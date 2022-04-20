const Express = require("express");
const express = Express.Router();

express.get("/fortnite/api/version", async (req, res) => {
    res.json({
        "app": "fortnite",
        "serverDate": new Date().toISOString(),
        "overridePropertiesVersion": "unknown",
        "cln": "17951730",
        "build": "1.8",
        "moduleName": "Fortnite-Core",
        "buildDate": "2021-10-27T21:00:51.697Z",
        "version": "18.30",
        "branch": "Release-1.8",
        "modules": {
          "Epic-LightSwitch-AccessControlCore": {
            "cln": "17237679",
            "build": "1.8",
            "buildDate": "2021-08-19T18:56:08.144Z",
            "version": "1.8",
            "branch": "trunk"
          },
          "epic-xmpp-api-v1-base": {
            "cln": "5131a23c1470acbd9c94fae695ef7d899c1a41d6",
            "build": "1.8",
            "buildDate": "2019-07-30T09:11:06.587Z",
            "version": "1.8",
            "branch": "master"
          },
          "epic-common-core": {
            "cln": "17909521",
            "build": "1.8",
            "buildDate": "2021-10-25T18:41:12.486Z",
            "version": "1.8",
            "branch": "TRUNK"
          }
        }
    });
})

express.get("/fortnite/api/v2/versioncheck/*", async (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})

express.get("/fortnite/api/v2/versioncheck*", async (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})

express.get("/fortnite/api/versioncheck*", async (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})

module.exports = express;
