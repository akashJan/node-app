const { request, response } = require("express");

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// To parse the request bodies
app.use(express.json());

console.log(`===== Mongo DB connection =====`);
// mongodb://localhost:27017/user_database
async function mongoConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/user_database");
    console.log("====== Connection successfully ==========");
  } catch (error) {
    console.log(error);
  }
}
mongoConnection();

// Defining Schema for Student
const schemaStudent = new mongoose.Schema(
  {
    name: { type: String },
    college: { type: String },
    marks: { type: String },
  },
  { collection: "student_collection" }
);

// Creating the Model for Schema: schemaStudent
const Student = mongoose.model("Student", schemaStudent);

// To create the resource
app.post("/create", (request, response) => {
  const { name, college, marks } = request.body;
  Student.create({
    name,
    college,
    marks,
  });
  response.send(`Successfully created Student `);
});

// // To retrieve or fetch the data
// app.get("/students", (request, response) => {
//   response.send(`Student data: ${request.url}`);
// });

//To retrieve or fetch the data
app.get("/students", async (request, response) => {
  const allStudents = await Student.find({});
  response.status(200).json({
    allStudents,
  });
});

// To update the resource
// app.put("/update", (request, response) => {
//   response.send(`Student updated successfully: ${request.url}`);
// });

// To update the resource
app.put("/update", async (request, response) => {
  const { name, college, marks } = request.body;
  const studentDocument = await Student.findOneAndUpdate(
    { marks: marks }, // Find the students by marks = 70
    { name: name, college: college }, // Update the fields
    { new: true, upsert: true }
  );
  response.status(200).json(studentDocument);
});

// To delete the resource
// app.delete("/delete", (request, response) => {
//   response.send(`Student deleted successfully: ${request.url}`);
// });

// To delete the resource using particular field
// http://localhost:8080/delete/555
app.delete("/delete/:mrk", async (request, response) => {
  const mrk = request.params.mrk;
  const deletedStudent = await Student.findOneAndDelete({ marks: mrk });
  if (!deletedStudent) {
   return response.status(404).json({
      status: 404,
      message: `Not Found, Student with marks: ${mrk}`,
    });
  }
  return response.status(200).json(deletedStudent);
});

app.listen(8081, () => {
  console.log(`Server started on port 8081`);
});
