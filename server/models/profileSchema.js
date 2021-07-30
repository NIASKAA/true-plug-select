const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const profileSchema = new mongoose.Schema({
   userID: { type: String, require: true, unique: true },
   username: { type: String, required: true },
   email: { type: String, unique: true, required: true , match: [/.+@.+\..+/, 'Must use a valid email address']},
   password: {type: String, required: true},
   lastName: { type: String, required: true },
   profilePic: { type: String },
   posts: [
      {
         type: String,
      },
   ],
});

profileSchema.pre('save', async function (next) {
   if (this.isNew || this.isModified('password')) {
     const saltRounds = 10;
     this.password = await bcrypt.hash(this.password, saltRounds);
   }
 
   next();
 });
 
profileSchema.methods.isCorrectPassword = async function (password) {
   return bcrypt.compare(password, this.password);
 };
 

const model = mongoose.model("profileData", profileSchema);

module.exports = model;
