// Create all the routes to display pages (View)
const router = require("express").Router();
const path = require("path");
// You will need html routes to display the following pages:
// index.html ( "/" )
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})
// exercise.html ( "/exercise" )
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/exercise.html"))
})
// stats.html ( "/stats" )
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/stats.html"))
})

module.exports = router;