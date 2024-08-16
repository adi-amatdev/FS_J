const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://uaaacharya:DD5zCePYn4k3uneA@cluster0.r3thrl3.mongodb.net/100xdevs",
);

const User = mongoose.model("Users", { username: String, email: String });

const user = new User({ username: "Mansingh", email: "mansign@gmail.com" });
// or use User.create({ username: "Mansingh", email: "mansign@gmail.com" })
user.save();
