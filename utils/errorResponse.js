class errorResponse extends Error {
    constructor(message, statusCode) {
        super(message);                     //super constructor
        this.statusCode = statusCode;
    }
}

module.exports = errorResponse;