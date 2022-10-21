const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
 const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    avatar: {
        type: String,
        required: true,
        minlength: 8,
    }

}, {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true },
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });


const user = mongoose.model("user", userSchema);
module.exports =  user;