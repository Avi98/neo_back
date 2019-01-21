const router = require("express").Router();
const todo = require("../controller/todo");

//first basic route
router.get("/home", (req, res) => {
  res.json({
    status: "API"
  });
});
router
  .route("/todo")
  .get(todo.todoGetAll)
  .post(todo.addTodo);
router
  .route("/todo/:id")
  .put(todo.updateTodo)
  .delete(todo.deleteTodo);

module.exports = router;
