const express = require("express");
const render = require("./render");
const controller = require("../controller/usercontroller");
const router = express.Router();
router.get("/",render.home);
router.get("/add", render.add);
router.get("/update", render.update_user);
// api
router.get("/api/v1/user",controller.find)
router.put("/api/v1/user/:id",controller.updated)
router.post("/api/v1/user",controller.create)
router.delete("/api/v1/user/:id",controller.delete)

module.exports = router;
