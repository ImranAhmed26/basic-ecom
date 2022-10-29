import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      minLength: [3, "Name is too short"],
      maxLength: [32, "Name is too long"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      match: [/\S+@\S+\.\S+/, "Email already taken"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Phone number is required"],
      minLength: [8, "Too small to be true"],
      maxLength: [24, "Too long to remember"],
      // match: [/\S+@\S+\.\S+/, "Number already taken"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Too Small to be secure"],
    },
    address: {
      street: String,
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zip: Number,
    },
    type: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "editor", "user"],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
