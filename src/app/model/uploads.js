const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Music = new Schema(
  {
    name: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
    src: {
      type: String,
      default: "",
      require: true,
    },
    imgSrc: {
      type: String,
      default: "",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("musics", Music);
