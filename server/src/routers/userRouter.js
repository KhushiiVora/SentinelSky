const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const User = require("../schema/userSchema");
// const auth = require('../middleware/auth');
const router = new express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/signup", urlencodedParser, async (req, res) => {
  const userData = req.body;

  console.log(userData);
  console.log("Location: ", req.body.location);

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    weatherNotifications: req.body.weatherNotifications,
    disasterNotifications: req.body.disasterNotifications,
    notificationMethod: req.body.notificationMethod,
    location: req.body.location,
  });

  try {
    await user.save();
    console.log("Data saved successfully");
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", urlencodedParser, async (req, res) => {
  try {
    console.log("request body");
    console.log(req.body);
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    console.log("user" + user);

    // TODO: Cookie and geAuthToken();

    res.status(200).send({ message: "Data retrieved successfully" });
  } catch (e) {
    const err = e.toString().replace("Error: ", "");
    // console.log(e);
    // res.status(404).send(
    //   `<script>alert("${err}");
    //   location.href="loginPage.js"</script>`
    // );
  }
});

module.exports = router;
