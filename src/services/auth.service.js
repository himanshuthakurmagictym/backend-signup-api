const user = require("../model/user.model");
const userModel = require("../model/user.model");
const httpStatus =  require("http-status");
const AppError = require("../middleware/catch-error");
const creatUser = async(userbody)=>{

    await checkDuplicateEmail(userbody.email);
    const register = {
        name:userbody.name,
        email:userbody.email,
        password:userbody.password,
        avatar:userbody.password,
      }
    const user = await userModel.create(register);
    return user;
}

const checkDuplicateEmail = async(email)=>{
        const user = await userModel.findOne({email});
      
        if(user){
               throw new AppError(httpStatus.BAD_REQUEST, "Email already taken"); 
        }
}   


const authService = {
    creatUser
}

module.exports =  authService;