const http=require('http');
var dt=require('./module');

http.createServer(function(req, res)
{
    //res.writeHead(200, {'Content-Type': 'text/plain'})
res.write("Hello World\nToday is "+ dt.GiveDate()+"\n"+dt.Information())
res.end();
}).listen(8080, ()=>{                       //Any port number, already tried 8081 
console.log("The Server is Running on http://localhost:8080/")

})

