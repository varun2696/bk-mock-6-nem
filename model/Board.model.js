const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtasks: [
    {
      title: String,
      isCompleted: Boolean,
    },
  ],
  status: {
    type: String,
    enum: ["Todo", "Doing", "Done"],
    default: "Todo",
  }
});

const BoardModel = mongoose.model("Board", boardSchema);

module.exports = BoardModel;
