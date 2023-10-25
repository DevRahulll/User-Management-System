const { UserModel } = require('../model/user.model.js')
const mongoose = require('mongoose')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



// to get into the home Page
exports.home = (req, res) => {
    res.send('Welcome to <br> <h1>USER-Management-System</h1><h3>I am Rahul Dev</h3>');
}

// to User Registertion or Sign up
exports.signup = async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(200).send({
            msg: "SignUp Successfull"
        })
    } catch (error) {
        res.status(501).send({
            msg: error.message
        })
    }
}

// Login User
exports.UserLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const getuserData = await
            UserModel.findOne({ username }).select("+password");
        if (getuserData && getuserData.username) {
            const result = await
                bcrypt.compare(password, getuserData.password)


            if (result) {
                const token = await getuserData.jwtToken();
                const cookieOption = {
                    maxAge: 24 * 60 * 60 * 1000,//24hr
                    httpOnly: true //not able to modify the cookie in client side 
                };
                res.cookie("token", token, cookieOption);
                res.status(200).json({
                    success: true,
                    data: userData
                });
            }
            else {
                res.status(404).send({ msg: "Password is Incorrect ,Try Again" })
            }
        }
        else{
            res.status(404).send({msg:"No Account Found Associated with this username"});
        }
    }
    catch (error) {
        res.status(501).send({ msg: error.message })
    }
}



// Getting User Details from DB
exports.getUserDetails = async (req, res) => {
    const { id, username } = req.user;

    try {
        const userData = await User.userModel.findOne({ username });
        res.status(200).send({
            msg: "Successful",
            data: userData
        })
    } catch (error) {
        res.status(501).send({ msg: error.message })
    }
}