const { request, response } = require("express");

const express = require("express");
const app = express();

// To retrieve or fetch the data
app.get("/students", (request, response) => {
  response.send(`Student data: ${request.url}`);
});

// To Create the resource
app.post("/create", (request, response) => {
  response.send(`Student created successfully: ${request.url}`);
});

// To update the resource
app.put("/update", (request, response) => {
  response.send(`Student updated successfully: ${request.url}`);
});

// To delete the resource
app.delete("/delete", (request, response) => {
  response.send(`Student deleted successfully: ${request.url}`);
});

app.listen(8081, () => {
  console.log(`Server started on port 8081`);
});
