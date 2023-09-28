import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'
import { Admin } from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'

const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    const admin = await Admin.findOne({ email })
    console.log(admin,"admin");
    if (admin) {
        const valid = bcrypt.compare(password, admin.password)
        if (valid) {
                 generateToken(res,admin._id)
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email:admin.email
        })
        }
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const logoutAdmin = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires:new Date(0)
    })
    res.status(200).json("Admin logged out")
})

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.query.id;
    console.log(id)

    // Check if the document exists
    const user = await User.findByIdAndRemove(id);

   
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    } else {
          return res.status(200).json({ message: "User deleted successfully" });
    }
});




const getUserProfiles = asyncHandler(async (req, res) => {
    const id = req.query.id
    console.log(id);
    const user = await User.findById(id)
    res.status(200).json(user)
})


const updateUserData = asyncHandler(async (req, res) => {
    const user = await User.findOne({_id: req.body.id })
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
                email: updatedUser.email,
                image:updatedUser.image
            })
    } else {
        res.status(404)

        throw new Error("User not found")
}
})


const addUser = asyncHandler(async (req, res) => {
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


export {
    authAdmin,
    logoutAdmin,
    getUsers,
    deleteUser,
    getUserProfiles,
    updateUserData,
    addUser
}