const asyncHander = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel.js");
/*
@desc register user
@route POST /api/user/register
@access public
*/
const registerUser = asyncHander( async(req, res) =>{
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(404);
        throw new Error("All fields are mandatory.");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already taken.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if(user) {
        res.status(201).json({
            "_id": user.id,
            "email": user.email
        });
    }else{
        res.status(400);
        throw new Error("User data is not valid.");
    }
});

/*
@desc login user
@route POST /api/user/login
@access public
*/
const loginUser = asyncHander( async(req, res) =>{
    const { email, password } = req.body;
    if(!email || !password){
        res.status(404);
        throw new Error("All fields are mandatory.");
    }
    const user = await User.findOne({ email });
    if(!user){
        res.status(400);
        throw new Error("User is not having.");
    }else if(await bcrypt.compare(password, user.password))
    {
        const accessToken = jwt.sign(
            {
                user : {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.SECRET_ACCESS_TOKEN,
            { expiresIn: "1m" }
        );
        res.json({ accessToken })
    }else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

/*
@desc current user
@route POST /api/user/current
@access private
*/
const currentUser = asyncHander( async(req, res) =>{
    res.json(req.user);
});


module.exports = {
    registerUser,
    loginUser,
    currentUser
}