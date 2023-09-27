
import express from 'express'
import { authAdmin, deleteUser, getUsers, logoutAdmin,getUserProfiles, updateUserData, addUser} from '../controllers/adminController.js'
import { protectAdmin } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post('/auth', authAdmin)
router.post('/logout', logoutAdmin)
router.get('/users',protectAdmin, getUsers)
router.delete('/delete-user',protectAdmin, deleteUser)
router.get('/user-details',protectAdmin, getUserProfiles)
router.post('/edit-user',protectAdmin, updateUserData)
router.post('/add-user',protectAdmin,addUser)

export default router