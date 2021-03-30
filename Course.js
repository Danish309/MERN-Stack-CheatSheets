const express = require('express')

var router=express.Router()

router.get('/',(req,res)=>{
    res.send('Course Registrations')
    
})
router.get('/names',(req,res)=>{
    res.send('Web Tech, FOP')
    
})

module.exports=router