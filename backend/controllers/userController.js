import asyncHandler from 'express-async-handler'

//@desc  Auth user/set token
//route  POST /api/users/auth
//@access Public
const authUser = asyncHandler(async(req, res) => {
    res.status(200).json("user auth")
})

//@desc  Register new user
//route  POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json("Register new user")
})

//@desc  Logout user
//route  POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async(req, res) => {
    res.status(200).json("User logout")
})

//@desc  Get user profile
//route  GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json("get user profile")
})


//@desc  Update user profile
//route  POST /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json("update user profile")
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}