const express=require('express')
var router=express.Router()

router.get('/',(req,res,next)=>{
    res.send('Welcome to Library') 
})

router.get('/Borrow',(req,res)=>{
    res.send('Borrow a Book')
})

router.get('/Update',(req,res)=>{
    res.send('Update a Book')
})

module.exports=router