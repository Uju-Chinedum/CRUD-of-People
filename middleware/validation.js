const joi = require("joi");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const personValidationSchema = joi.object({
  name: joi.string().required().trim(),
});

const validatePerson = (req, res, next) => {
  const { error } = personValidationSchema.validate(req.body);
  if (error) {
    throw new CustomError(
      "Validation Error",
      error.details[0].message,
      StatusCodes.BAD_REQUEST
    );
  }
  next();
};

module.exports = validatePerson;
