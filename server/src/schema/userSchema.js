const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isAlphanumeric(value)) {
        throw new Error(
          "Unable to SignUp! Username should contain only alphabets and numbers!"
        );
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Unable to SignUp! Invalid Email!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error(
          "Unable to SignUp! Password must be a contain 8 charcters, lowercase, uppercase, special characters!"
        );
      }
    },
  },

  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Unable to SignUp! Invalid mobile number");
      }
    },
  },

  weatherNotifications: {
    type: Boolean,
    default: false,
  },

  disasterNotifications: {
    type: Boolean,
    default: false,
  },

  notificationMethod: {
    type: String,
    trim: true,
    lowercase: true,
  },

  location: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
});

//--------------Hashing Passwords-------------
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcryptjs.hash(user.password, 8);
  }

  next(); //we call next() to inform that password hashing is done in order to perform next task which is to save the user information
});

//---------------Login Function---------------
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });
  //If user doesn't exists (Checking existence of user)
  if (!user) {
    throw new Error("Unable to login! Check your email and password!");
  } else {
    const isMatch = await bcryptjs.compare(password, user.password);

    //If user exists but Password is invalid (Checking password validation)
    if (!isMatch) {
      throw new Error("Unable to login! Check your email and password!");
    } else {
      console.log("Login Successful!");
      return user;
    }
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
