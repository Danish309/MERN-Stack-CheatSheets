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
app.get('/Laptops',(req,res,next)=>{
    res.write('1. Apple; 2. HP; 3. ACER; ')
    next()
},(req,res)=>{
    //res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(' 4. Dell')
}
)
/*app.post('/',(req,res)=>{
  res.send('The message is sent to server')
})
app.all('/',(req,res)=>{
    res.send('Page does not exists')
})
*/

//**************************** following url to put values as parameters*******************************************************

//http://localhost:3031/Students/:1/Books/:a
app.get('/Students/:studentid/Books/:bookid',(req,res)=>{
    res.send(req.params)
})
var server=app.listen(3031,()=>{
    console.log('The Server is running on Port http://localhost:3031/')
})