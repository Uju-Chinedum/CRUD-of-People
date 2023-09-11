const Person = require("../models/Person");
const {StatusCodes} = require("http-status-codes");

const createPerson = async (req, res) => {
  res.send("create person");
};

const getPerson = async (req, res) => {
  res.send("get person");
};

const updatePerson = async (req, res) => {
  res.send("update person");
};

const deletePerson = async (req, res) => {
  res.send("delete person");
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson
}
