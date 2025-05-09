const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// models
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password length should be 6 characters long"],
    },
    customerId: {
        type: String,
        default: "",
    },
    subscription: {
        type: String,
        default: "",
    },
});

// hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// match password
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// SIGN TOKEN
userSchema.methods.getSignedToken = function (res) {
    const accessToken = JWT.sign(
        { id: this._id },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.JWT_ACCESS_EXPIREIN }
    );
    const refreshToken = JWT.sign(
        { id: this._id },
        process.env.JWT_REFRESH_TOKEN,
        { expiresIn: process.env.JWT_REFRESH_EXPIREIN }
    );
    res.cookie("refreshToken", `${refreshToken}`, {
        maxAge: 86400 * 7, // Set cookie maxAge in milliseconds
        httpOnly: true,
    });
    return accessToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
