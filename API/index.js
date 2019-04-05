// This is Primary File for API;
//Dependencies

const http = require('http');
let url = require('url');

let server= http.createServer((req,res)=>{
     //QueryString

    let queryString = url.parse(req.url).query;
    
    // let parsedUrl = url.parse(req.url,true);
    // let path = parsedUrl.pathname;
    // let trimmedPath = path.replace(/^\/+|\/+$/g,'');
    let parsedUrl = url.parse(req.url,true).pathname.replace(/^\/+|\/+$/g,'');

    //QueryString
     let queryString = url.parse(req.url).query;

     //get Headers
     let headers= req.headers;
   
    //Type of Method which being Utlilzed;
    let method = req.method.toLowerCase();

    res.end("Hello world\n");
    console.log("Requested path is "+parsedUrl +'Rquested Method is : ' + method+'query : '+ queryString );
    

})

server.listen(3000,()=>{console.log('Listening to Port 3000')});