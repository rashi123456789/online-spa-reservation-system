const express=require('express')
const router=express.Router()

const {authenticateUsers}=require('../app/middleware/authenticateUser')
const usersController=require('../app/controller/userController')
const reservationController=require('../app/controller/reservationController')
//user authentication
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUsers,usersController.account)
// reservation
router.get('/reservations',authenticateUsers,reservationController.list)
router.post('/reservations',authenticateUsers,reservationController.create)
router.get('/reservations/:id',authenticateUsers,reservationController.show)
router.put('/reservations/:id',authenticateUsers,reservationController.update)
router.delete('/reservations/:id',authenticateUsers,reservationController.destroy)


module.exports=router