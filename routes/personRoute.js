const express = require("express");
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");
const validatePerson = require("../middleware/validation");

const router = express.Router();

router.post("/", validatePerson, createPerson);

router
  .route("/:user_id")
  .get(getPerson)
  .patch(updatePerson)
  .delete(deletePerson);

module.exports = router;
