var express = require ('express')

var app=express()

var c1= (req,res,next)=>{
console.log('c1')
//app.write('Console1')
next()
}
var c2= (req,res,next)=>{
    console.log('c2')

next()    
}
    var c3= (req,res,next)=>{
        console.log('c3')
        next()    
    }
        var c4= (req,res)=>{
            res.send('Route Handler with Arrays')
        }

            app.get('/console', [c1,c2,c3,c4])
            var server=app.listen(3001,()=>{
                console.log('The Server is Running on port: http://localhost:3001/')
            })
