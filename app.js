const express=require ('express')

var app=express()

app.get('/',(req,res)=>{
  res.send('<h1>ABC STORE</h1>')
})
//app.post('/',(req,res)=>{
  //  res.send('The message is sent to server')
//})
app.get('/Clothes',(req,res)=>{
    res.send('1. Shirts; 2. Jeans; 3. Coat;')
})
app.get('/Phones',(req,res)=>{
    res.send('1. APPLE; 2. SAMSUNG; 3. VIVO;')
})
app.get('/Laptops',(req,res)=>{
    res.send('1. Apple; 2. HP; 3. ACER;')
})
/*app.post('/',(req,res)=>{
  res.send('The message is sent to server')
})
app.all('/',(req,res)=>{
    res.send('Page does not exists')
})
*/
var server=app.listen(3031,()=>{
    console.log('The Server is running on Port http://localhost:3031/')
})