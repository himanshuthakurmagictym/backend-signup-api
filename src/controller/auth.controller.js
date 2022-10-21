
const httpStatus =  require("http-status");
const catchAsync =  require("../middleware/catch-async");
const authService = require("../services/auth.service")
const signupController = catchAsync(async(req, res)=>{
   const response = await authService.creatUser(req.body);
    const data = {
        status_code: httpStatus.CREATED,
        data: response,
        message: "Successfully created an account",
    }
    res.status(httpStatus.CREATED).send(data);
});




const authController = {
    signupController
}

module.exports = authController;