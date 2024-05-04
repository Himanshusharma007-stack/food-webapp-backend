// import { mailer } from "../utils/mailer";
const express = require("express");
const foodItemController = require("../controllers/foodItem");
const nodemailer = require("nodemailer");
const mailer = require("../utils/mailer");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/getFoodItems", async (req, res) => {
  try {
    return await foodItemController.getAllfoodItems(req, res);
  } catch (error) {
    console.error("Error ---> ", error);
    res.status(500).send({ success: false, msg: "Error fetching data" });
  }
});

// https://myaccount.google.com/apppasswords
router.post("/email", async (req, res) => {
  try {
    let { name, email, mobile, msg } = req.body;

    let htmlbody = `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <h2 style="color: #333333;">${name} wants to reaching out!</h2>
      <p style="color: #666666;">Here are the details:</p>
      <ul style="color: #666666; list-style: none; padding-left: 0;">
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Mobile:</strong> ${mobile}</li>
        <li><strong>Message:</strong> ${msg}</li>
      </ul>
    </div>`;

    let result = await mailer(htmlbody);
    // let result = {}
    return res.send({ ...result });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
