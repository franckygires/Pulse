// api/users.js

import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcryptjs from "bcryptjs";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  

  switch (method) {
    case "POST":
      try {
        let {
          email,
          name,
          password,
        } = req.body;
        //console.log(req.body);


        if (!name || typeof name !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid firstname" });
        }

        if (!email || typeof email !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid email" });
        }
        if (!password) {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid password" });
        }
        if (password.length < 2) {
          return res.status(400).json({
            success: "false",
            error: "Password too small. Should be at least 6 characters ",
          });
        }
        password = await bcryptjs.hash(password, 10);

        const user = await User.create({
          email,
          name,
          password,
        });

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        if (error.code === 11000) {
          return res.status(400).json({
            success: false,
            error: 401,
            data: "User already in the DB",
          });
        }
        res.status(400).json({ success: false, data: "some error" });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
