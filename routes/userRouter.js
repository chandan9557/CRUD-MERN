const express = require("express");
const {
  getData,
  createData,
  replaceData,
  updateData,
  deleteData,
} = require("../controllers/userController");
const router = express.Router();

router.get("/api", getData);
router.post("/api", createData);
router.put("/api/:_id", replaceData);
router.patch("/api/:_id", updateData);
router.delete("/api/:_id", deleteData);
module.exports = router;
