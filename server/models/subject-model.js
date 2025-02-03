const { Schema, model } = require("mongoose");

const TeacherSchema = new Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   email: { type: String, unique: true, required: true },
});

const ConnectedStudentsSchema = new Schema({
   id: { type: String, unique: true, required: true },
   lastName: { type: String, required: true },
});

const TaskSchema = new Schema({
   type: { type: String, required: true },
   name: { type: String, required: true },
});

const SubjectSchema = new Schema({
   subjectName: { type: String, unique: true, required: true },
   teachers: [TeacherSchema],
   connectedUsers: [ConnectedStudentsSchema],
   tasks: [TaskSchema],
});

module.exports = model("Subject", SubjectSchema);
