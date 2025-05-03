const { Schema, model } = require("mongoose");

const ConnectedStudentsSchema = new Schema({
   id: { type: Schema.Types.ObjectId, ref: "User" },
   lastName: { type: String, required: true },
});

const TaskSchema = new Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   subjectName: { type: String, required: true },
   type: { type: String, required: true },
   file: { type: File, required: true },
});

const SubjectSchema = new Schema({
   subjectName: { type: String, unique: true, required: true },
   teacher: {
      email: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
   },
   connectedUsers: [ConnectedStudentsSchema],
   tasks: [TaskSchema],
});

module.exports = model("Subject", SubjectSchema);
