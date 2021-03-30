const express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to Students Portal')
})

router.get('/list',(req,res)=>{
    res.send('1:Danish; 2:Ammar;')
})

module.exports=router