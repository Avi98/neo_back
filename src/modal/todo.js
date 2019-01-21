const mongoose = require("mongoose");

const TodoShecma = mongoose.Schema({
  list: {
    type: String,
    required: true
  },
  completed: Boolean,
  create_at: {
    type: Date,
    default: Date.now
  }
});
const Todo = mongoose.model("todo", TodoShecma);
module.exports = Todo;
