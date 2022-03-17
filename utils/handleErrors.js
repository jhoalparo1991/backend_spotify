const handle_errors = (res,message='Error in the request',code=403) => {
    return res.status(code).json({
        code:code,
        message:message
    });
}


module.exports = handle_errors;