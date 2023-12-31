const ErrorHandler = require("../utils/errorhander");

module.exports = (err,__req,res)=>{

    err.statusCode= err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.name === "CastError"){
        const message = `Resourse not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    });
};