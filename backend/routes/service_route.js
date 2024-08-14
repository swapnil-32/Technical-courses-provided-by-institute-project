const express=require("express")
const router=express.Router()
const servicecontroller=require("../controllers/services")
// const servicebyid=require("../controllers/servicebyid")
// const servicebyid=require("../controllers/ser")
router.get('/service',servicecontroller.services)
router.get('/service/:id',servicecontroller.servicebyid)
module.exports=router;