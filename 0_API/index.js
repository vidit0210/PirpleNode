/*
 *Primary file For API
 *
 */

//Dependencies.
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

//Create Server and make it respond to the string
let server = http.createServer((req, res) => {
  //Parse the Url
  let parsedUrl = url.parse(req.url, true);

  //Get The Path from the Url
  let path = parsedUrl.pathname;
  //Trim the path
  let trimedPath = path.replace(/^\/+|\/+$/g, "");

  //Get the Query String as an object
  let queryStringObject = parsedUrl.query;

  //Get The HTTP method
  let method = req.method.toLowerCase();

  //Get The headers as an Object
  let headers = req.headers;

  //Get the Payload ifd there is any
  let Decoder = new StringDecoder("utf-8");
  //Payload comes in as Stream
  let buffer = "";

  req.on("data", data => {
    buffer += Decoder.write(data);
  });
  req.on("end", () => {
    buffer += Decoder.end();
    //Sending Response
    res.end("Hello World! \n");

    //Log request to The Path
    {
      console.log(
        "Request received on the Path:",
        trimedPath,
        "Method :",
        method,
        "queryStringParamneters",
        queryStringObject
      );
    }

    //let Headers
    console.log("Headers", headers); //Sent Via PostMan
    console.log("Payload", buffer);
  });
});

//Make Server listen to a port
server.listen(3000, () => console.log("Listening to Port 3000"));
