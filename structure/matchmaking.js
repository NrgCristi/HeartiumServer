const Express = require("express");
const express = Express.Router();
const fs = require("fs");
const path = require("path");
const iniparser = require("ini");
const config = iniparser.parse(fs.readFileSync(path.join(__dirname, "..", "Config", "config.ini")).toString());
const functions = require("./functions.js");
const memory = require("./../memory.json");

express.get("/fortnite/api/matchmaking/session/findPlayer/*", async (req, res) => {
    res.status(200);
    res.end();
})

express.get("/fortnite/api/game/v2/matchmakingservice/ticket/player/*", async (req, res) => {
    memory.currentbuildUniqueId = req.query.bucketId.split(":")[0];

    fs.writeFileSync("./memory.json", JSON.stringify(memory, null, 2));

    res.json({
        "serviceUrl": "ws://heartiumservermatchmaker.herokuapp.com",
        "ticketType": "mms-player",
        "payload": "69=",
        "signature": "420="
    })
    res.end();
})

express.get("/fortnite/api/game/v2/matchmaking/account/:accountId/session/:sessionId", async (req, res) => {
    res.json({
        "accountId": req.params.accountId,
        "sessionId": req.params.sessionId,
        "key": "AOJEv8uTFmUh7XM2328kq9rlAzeQ5xzWzPIiyKn2s7s="
    })
})

express.get("/fortnite/api/matchmaking/session/:session_id", async (req, res) => {
    res.json({
        "id": req.params.session_id,
        "ownerId": functions.MakeID().replace(/-/ig, "").toUpperCase(),
        "ownerName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverAddress": config.GameServer.ip,
        "serverPort": Number(config.GameServer.port),
        "maxPublicPlayers": 100,
        "openPublicPlayers": 100,
        "maxPrivatePlayers": 0,
        "openPrivatePlayers": 0,
        "attributes": {
          "REGION_s": "EU",
          "GAMEMODE_s": "FORTATHENA",
          "ALLOWBROADCASTING_b": false,
          "SUBREGION_s": "GB",
          "DCID_s": "FORTNITE-LIVEEUGCEC1C2E30UBRCORE0A-14840880",
          "tenant_s": "Fortnite",
          "MATCHMAKINGPOOL_s": "Any",
          "STORMSHIELDDEFENSETYPE_i": 0,
          "HOTFIXVERSION_i": 1.8,
          "PLAYLISTNAME_s": "Playlist_DefaultSolo",
          "SESSIONKEY_s": functions.MakeID().replace(/-/ig, "").toUpperCase(),
          "TENANT_s": "Fortnite",
          "BEACONPORT_i": 15009
        },
        "publicPlayers": [100],
        "privatePlayers": [0],
        "totalPlayers": 100,
        "allowJoinInProgress": true,
        "shouldAdvertise": true,
        "isDedicated": true,
        "usesStats": true,
        "allowInvites": true,
        "usesPresence": true,
        "allowJoinViaPresence": true,
        "allowJoinViaPresenceFriendsOnly": true,
        "buildUniqueId": memory.currentbuildUniqueId, // buildUniqueId is different for every build, this uses the netver of the version you're currently using
        "lastUpdated": new Date().toISOString(),
        "started": true
      })
})

express.post("/fortnite/api/matchmaking/session/*/join", async (req, res) => {
    res.status(204);
    res.end();
})

express.post("/fortnite/api/matchmaking/session/matchMakingRequest", async (req, res) => {
    res.json([])
})

module.exports = express;
