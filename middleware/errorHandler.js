const {
    VALIDATION_ERROR,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    SERVER_ERROR
} = require("../constants.js");

const errorHandler  = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case UNAUTHORIZED:
            res.json({
                title: "Unauthorized access",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case SERVER_ERROR:
            res.json({
                title: "500 Internal Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No Error Occur. Everything Ok!");
            break;
    }
}


module.exports = errorHandler;