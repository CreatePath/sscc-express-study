const CustomError = require("./custom");

class IsExist extends CustomError {
    constructor (message) {
        super(message);
        this.status = 409;
    }
}

module.exports = IsExist;