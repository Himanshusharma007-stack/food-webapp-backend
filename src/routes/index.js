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

    let htmlbody = `<strong>Name:</strong> ${name} <br/>
    <strong>Email:</strong> ${email} <br/>
    <strong>Mobile:</strong> ${mobile} <br/>
    <strong>Message:</strong> ${msg} <br/>
    `;

    let result = await mailer(htmlbody);
    // let result = {}
    return res.send({ ...result });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
