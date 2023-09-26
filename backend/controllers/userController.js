import asyncHandler from 'express-async-handler'
import { User } from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
//@desc  Auth user/set token
//route  POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
     const {email,password}=req.body
    console.log(req.body);
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//@desc  Register new user
//route  POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password } = req.body
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    } else {
        const user = await User.create({
            name,email,password
        })
        if (user) {
            generateToken(res,user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email:user.email
            })
        } else {
            res.status(400)
            throw new Error('Invalid user')
        }
    }
    
})

//@desc  Logout user
//route  POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires:new Date(0)
    })
    res.status(200).json("User logged out")
})

//@desc  Get user profile
//route  GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
    console.log("here");
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json(user)
})


//@desc  Update user profile
//route  POST /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)
    console.log("here");
    if (user) {
        console.log(user)
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.image=req.body.imageSelected || user.image
        if (req.body.password) {
            user.password=req.body.password
        }
        const updatedUser = await user.save()
     
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email:updatedUser.email
            })
    } else {
        res.status(404)

        throw new Error("User not found")
}
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}