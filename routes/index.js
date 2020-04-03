const express = require('express');
const router = express.Router();

//homeContoller as the name suggests is used for using Home Contoller
const homeController = require('../controllers/home_controller');
console.log("Router Loaded");

//to get input from form
router.use(express.urlencoded());

//default when it is loaded
router.get('/',homeController.home);

//to create todo , createTODO function is called
router.post('/create-todo',homeController.createTODO);

// to delete some todo(s) , deleteTODO function is called
router.post('/delete-todo',homeController.deleteTODO);

module.exports = router;
