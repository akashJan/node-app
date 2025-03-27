const { log } = require("console");
const fs = require("fs");

// Reading from the File
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

// Writing content to the file
const content = "Hello,this is written to the file!";
fs.writeFile("output.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log("File written successfully");
});

// Retrive information about a file - stat()
// const filePath = "Hello,this is written to the file!";
fs.stat(filePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Access the properties of the stats object
  console.log("File size:", fs.stat.size + "bytes");
  console.log("Is a file:", stats.isFile());
  console.log("Is a directory:", stats.isDirectory());
  console.log("File birthtime (creation time):", stats.birthtime());
  console.log("File modification time:", stats.mtime());
});

// appendFile()
// const filePath = "output.txt";
const dataToAppend = "This data will be appended to the file.";
// Append data to the file asynchronously
fs.appendFile(filePath, dataToAppend, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data has been appended to the file.");
});

// unlink()
const filePath = "sample.txt";
// Delete the file asynchronously
fs.appendFile(filePath, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been deleted.");
});
