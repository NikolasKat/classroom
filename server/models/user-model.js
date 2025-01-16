const { Schema, model } = require("mongoose");

const UserModel = new Schema({
   email: { type: String, required: true, unique: true },
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   password: { type: String, required: true },
});

module.exports = model("User", UserModel);
