const Express = require("express");
const express = Express.Router();
const fs = require("fs");
const functions = require("./functions.js");

express.get("/clearitemsforshop", async (req, res) => {
    res.set("Content-Type", "text/plain");

    const athena = require("./../profiles/athena.json");
    const CatalogConfig = require("./../Config/catalog_config.json");
    var StatChanged = true;

    for (var value in CatalogConfig) {
        for (var i in CatalogConfig[value].itemGrants) {
            if (Array.isArray(CatalogConfig[value].itemGrants)) {
                for (var key in athena.items) {
                    if (typeof CatalogConfig[value].itemGrants[i] == "string") {
                        if (CatalogConfig[value].itemGrants[i].length != 0) {
                            if (CatalogConfig[value].itemGrants[i].toLowerCase() == athena.items[key].templateId.toLowerCase()) {
                                delete athena.items[key]

                                StatChanged = true;
                            }
                        }
                    }
                }
            }
        }
    }

    if (StatChanged == true) {
        athena.rvn += 1;
        athena.commandRevision += 1;

        fs.writeFileSync("./profiles/athena.json", JSON.stringify(athena, null, 2));

        res.send('Success');
    } else {
        res.send('Failed, there are no items to remove')
    }
})

express.get("/eulatracking/api/shared/agreements/fn*", async (req, res) => {
    res.json({})
})

express.get("/fortnite/api/game/v2/friendcodes/*/epic", async (req, res) => {
    res.json([])
})

express.get("/launcher/api/public/distributionpoints/", async (req, res) => {
    res.json({
        "distributions": [
            "https://download.epicgames.com/",
            "https://download2.epicgames.com/",
            "https://download3.epicgames.com/",
            "https://download4.epicgames.com/",
            "https://epicgames-download1.akamaized.net/"
        ]
    });
})

express.post("/fortnite/api/game/v2/grant_access/*", async (req, res) => {
    res.json({});
    res.status(204);
})

express.post("/api/v1/user/setting", async (req, res) => {
    res.json([]);
})

express.get("/waitingroom/api/waitingroom", async (req, res) => {
    res.status(204);
    res.end();
})

express.get("/socialban/api/public/v1/*", async (req, res) => {
    res.json({
        "bans": [],
        "warnings": []
    });
})

express.get("/party/api/v1/Fortnite/user/*", async (req, res) => {
    res.json({
        "current": [],
        "pending": [],
        "invites": [],
        "pings": []
    });
})

express.post("/party/api/v1/Fortnite/user/*/current/*", async (req, res) => {
    res.json({});
})

express.post("/party/api/v1/Fortnite/user/*/pending/*", async (req, res) => {
    res.json({});
})

express.post("/party/api/v1/Fortnite/user/*/invites/*", async (req, res) => {
    res.json({});
})

express.get("/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient", async (req, res) => {
    res.json({});
})

express.post("/party/api/v1/Fortnite/user/*/pings/*", async (req, res) => {
    res.json({});
})

express.get("/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient", async (req, res) => {
    res.json({});
})

express.get("/fortnite/api/statsv2/account/:accountId", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    });
})

express.get("/statsproxy/api/statsv2/account/:accountId", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    });
})

express.get("/fortnite/api/stats/accountId/:accountId/bulk/window/alltime", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    })
})

express.post("/fortnite/api/feedback/*", async (req, res) => {
    res.status(200);
    res.end();
})

express.post("/fortnite/api/statsv2/query", async (req, res) => {
    res.json([]);
})

express.post("/statsproxy/api/statsv2/query", async (req, res) => {
    res.json([]);
})

express.post("/fortnite/api/game/v2/events/v2/setSubgroup/*", async (req, res) => {
    res.status(204);
    res.end();
})

express.get("/fortnite/api/game/v2/enabled_features", async (req, res) => {
    res.json([])
})

express.get("/api/v1/events/Fortnite/download/*", async (req, res) => {
    res.json({})
})

express.get("/fortnite/api/game/v2/twitch/*", async (req, res) => {
    res.status(200);
    res.end();
})

express.get("/fortnite/api/game/v2/world/info", async (req, res) => {
    const worldstw = functions.getTheater(req);

    res.json(worldstw)
})

express.post("/fortnite/api/game/v2/chat/*/recommendGeneralChatRooms/pc", async (req, res) => {
    res.json({})
})

express.get("/presence/api/v1/_/*/last-online", async (req, res) => {
    res.json({})
})

express.get("/fortnite/api/receipts/v1/account/*/receipts", async (req, res) => {
    res.json([])
})

express.get("/fortnite/api/game/v2/leaderboards/cohort/*", async (req, res) => {
    res.json([])
})

express.post("/datarouter/api/v1/public/data", async (req, res) => {
    res.status(204);
    res.end();
})

express.post("/api/v1/assets/Fortnite/*/*", async (req, res) => {
    res.json({"FortCreativeDiscoverySurface":{"meta":{"promotion":1},"assets":{}}})
})

express.get("/region", async (req, res) => {
    res.json({
        "continent": {
            "code": "EU",
            "geoname_id": 6255148,
            "names": {
                "de": "Europa",
                "en": "Europe",
                "es": "Europa",
                "fr": "Europe",
                "ja": "???????????????",
                "pt-BR": "Europa",
                "ru": "????????????",
                "zh-CN": "??????"
            }
        },
        "country": {
            "geoname_id": 2635167,
            "is_in_european_union": true,
            "iso_code": "GB",
            "names": {
                "de": "UK",
                "en": "United Kingdom",
                "es": "RU",
                "fr": "Royaume Uni",
                "ja": "??????",
                "pt-BR": "Reino Unido",
                "ru": "????????????????",
                "zh-CN": "??????"
            }
        },
        "subdivisions": [
            {
                "geoname_id": 6269131,
                "iso_code": "ENG",
                "names": {
                    "de": "England",
                    "en": "England",
                    "es": "Inglaterra",
                    "fr": "Angleterre",
                    "ja": "??????????????????",
                    "pt-BR": "Inglaterra",
                    "ru": "????????????",
                    "zh-CN": "?????????"
                }
            },
            {
                "geoname_id": 3333157,
                "iso_code": "KEC",
                "names": {
                    "en": "Royal Kensington and Chelsea"
                }
            }
        ]
    })
})

module.exports = express;
