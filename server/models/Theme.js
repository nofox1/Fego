const mongoose = require("mongoose");

const { Schema } = mongoose;

const themeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = Theme;
