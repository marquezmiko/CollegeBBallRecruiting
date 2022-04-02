const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

// Importing the jsdom module
const jsdom = require("jsdom");

// Creating a window with a document
const dom = new jsdom.JSDOM(`<!DOCTYPE html>
<body>
<h1 class="heading">
    GeeksforGeeks
</h1>
</body>
`);

// Importing the jquery and providing it
// with the window
const jquery = require("jquery")(dom.window);

// Appending a paragraph tag to the body
jquery("body").append("<p>Is a cool Website</p>");

// Getting the content of the body
const content = dom.window.document.querySelector("body");

// Printing the content of the heading and paragraph
console.log(content.textContent);

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/news/v2/list',
  headers: {
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
    'X-RapidAPI-Key': '0637ec4c76msh2bf1e379b333219p149455jsn2826a9df19bd'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});