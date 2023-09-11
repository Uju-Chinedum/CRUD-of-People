class CustomError extends Error {
  constructor(error, message, statusCode) {
    super(message);
    this.error = error;
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;
