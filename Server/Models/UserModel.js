const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw new Error("Email and Password are required");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPassword });

  return user;
};

userSchema.statics.login = async function (email, password) {
    //validation
    if (!email || !password) {
      throw new Error("Email and Password are required");
    }

    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("Email does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Password is incorrect");
    }

    return user;
}

module.exports = mongoose.model("UserCollection", userSchema);
