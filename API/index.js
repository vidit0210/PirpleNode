// This is Primary File for API;
//Dependencies

const http = require('http');
const url = require('url');
const stringDecoder =require('string_decoder').StringDecoder;

let server= http.createServer((req,res)=>{
    
    
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

    //Get Payload if there any
    let decoder = new stringDecoder('utf-8');
    let  buffer ='';
    req.on('data',(data)=>{
        buffer+= decoder.write(data)
    })
    req.on('end',()=>{
        buffer+=decoder.end()
        res.end("Hello world\n");
        console.log("Headers are:",headers);
        console.log('playlods are:',buffer)
        
    })


})

server.listen(3000,()=>{console.log('Listening to Port 3000')});

let handlers ={}
handlers.sample = function(data,callback){
    // CallBack should give HTTP status code and payload
    callback(406,{'name':'handler Sample'})
    
}