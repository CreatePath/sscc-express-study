const CustomError = require("./custom");

class NotFound extends CustomError {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

module.exports = NotFound;