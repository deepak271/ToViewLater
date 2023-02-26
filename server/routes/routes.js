const router = require('express').Router();
const userServices = require('../controller/services/userServices')
const userLists = require('../controller/services/userListServices');

// router.get('/api/',userServices.userLogin)
 router.post('/api/user/login',userServices.loginValidate,userServices.userLogin);

// router.post('/api/user/login')
 router.post('/api/user/signup',userServices.detailValidate,userServices.addUser)

// router.get('/api/list/getList')
// router.post('/api/list/addList')
// router.put('/api/list/updateList/:id')
// router.delete('/api/list/delete/:id')

module.exports = router;