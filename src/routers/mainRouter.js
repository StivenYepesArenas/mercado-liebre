const { Router } = require("express")

const mainController = require("../controllers/mainController.js")
const router = Router()
router.get("/", mainController.home)
router.get('/register', mainController.register)
router.get('/login', mainController.login)

module.exports=  router