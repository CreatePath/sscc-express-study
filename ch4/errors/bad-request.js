const CustomError = require("./custom");

class BadRequest extends CustomError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

module.exports = BadRequest;