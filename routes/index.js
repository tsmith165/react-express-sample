var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {title: "ZedsDeadPoly"})
})

router.get("/admin", (req, res) => {
  res.render("admin", {title: "Admin"})
})

module.exports = router
