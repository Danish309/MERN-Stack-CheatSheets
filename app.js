const express=require('express')
var app=express()

var books=require('./Books')
var student=require('./Student')
var course=require('./Course')


app.use('/Library',books)
app.use('/Portal',student)
app.use('/course', course)


var server=app.listen(3001,()=>{
    console.log('The Server is running on http://localhost:3001/')
})