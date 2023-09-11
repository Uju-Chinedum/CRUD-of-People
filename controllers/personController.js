const Person = require("../models/Person");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createPerson = async (req, res) => {
  const person = await Person.create(req.body);

  res.status(StatusCodes.CREATED).json({ person });
};

const getPerson = async (req, res) => {
  const { user_id } = req.params;

  const person = await Person.findOne({ _id: user_id }).select("_id name");
  if (!person) {
    throw new CustomError(
      "Not Found",
      `No person with id: ${user_id}`,
      StatusCodes.NOT_FOUND
    );
  }

  res.status(StatusCodes.OK).json({ person });
};

const updatePerson = async (req, res) => {
  const { user_id } = req.params;

  const { name } = req.body;
  if (!name) {
    throw new CustomError(
      "Bad Request",
      "Please provide a name to update field",
      StatusCodes.BAD_REQUEST
    );
  }

  const person = await Person.findOneAndUpdate(
    { _id: user_id },
    { name },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!person) {
    throw new CustomError(
      "Not Found",
      `No person with id: ${user_id}`,
      StatusCodes.NOT_FOUND
    );
  }

  res.status(StatusCodes.OK).json({ msg: "Name updated successfully", person });
};

const deletePerson = async (req, res) => {
  const { user_id } = req.params;

  const person = await Person.findOneAndDelete({ _id: user_id });
  if (!person) {
    throw new CustomError(
      "Not Found",
      `No person with id: ${user_id}`,
      StatusCodes.NOT_FOUND
    );
  }

  res.status(StatusCodes.NO_CONTENT);
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
