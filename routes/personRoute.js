const express = require("express");
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

const router = express.Router();

router.get("/", createPerson);

router
  .route("/:user_id")
  .get(getPerson)
  .patch(updatePerson)
  .delete(deletePerson);

module.exports = router;
