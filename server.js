const http = require("http");
const httpServer = http.createServer((request, response) => {
  const url = request.url;
  // response.end(`Request URL - ${url}`);
  switch (url) {
    case "/":
      response.end("Hey this is Home Page");
      break;
      case "/home":
        response.end("Hey this is Home Page");
        break;
    case "/about":
      response.end("Hey This is about me page");
      break;
    case "/contact":
      response.end("Hey This is contact page");
      break;
    case "/project":
      response.end("Hey This is project page");
      break;
    case "/skill":
      response.end("Hey This is skill page");
      break;
      default:
      response.end("Page Not Found");
      break;
  }
  //response.end("Hello, from server....");
});
httpServer.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
