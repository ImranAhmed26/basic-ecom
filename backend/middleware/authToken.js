import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const validToken = (req) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.cookie.split("=")[1];
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    console.log("Token validation successful");
    return decoded;
  } else {
    throw new Error("Not authorized, token failed");
  }
};

export const adminToken = async (req, res, next) => {
  try {
    const data = validToken(req);
    // console.log("data is: ", data);
    const { _id, type } = data;
    if (type === "admin") {
      req.user = await User.findById(_id).select("-password");
      next();
    } else {
      res.status(401).send({ error: "Not authorized as Admin" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ Error: "Not authorized as Admin" });
  }
};
export const editorToken = async (req, res, next) => {
  try {
    const data = validToken(req);
    // console.log("data is: ", data);
    const { _id, type } = data;
    if (type === "editor" || type === "admin") {
      req.user = await User.findById(_id).select("-password");
      next();
    } else {
      res.status(401).send({ error: "Not authorized as Admin or Editor" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not authorized as Admin or Editor" });
  }
};

export const userToken = async (req, res, next) => {
  try {
    const data = validToken(req);
    // console.log("data is: ", data);
    const { _id, type } = data;
    if (type === "user" || type === "editor" || type === "admin") {
      req.user = await User.findById(_id).select("-password");
      next();
    } else {
      res.status(401).send({ error: "Not authorized as user" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not authorized as a valid user" });
  }
};
