const http=require('http');


http.createServer(function(req, res)
{
    //res.writeHead(200, {'Content-Type': 'text/plain'})
res.write("Danish Kumar")
res.end();
}).listen(8080, ()=>{                       //Any port number, already tried 8081 
console.log("The Server is Running on http://localhost:8080/")

})

