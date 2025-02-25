import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User",usersSchema);
export default User;