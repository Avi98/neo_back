const todo = require("../modal/todo");

exports.todoGetAll = (req, res) => {
  todo
    .find()
    .exec()
    .then(response => res.json({ response }));
};
exports.addTodo = (req, res) => {
  const Todo = new todo();
  todo(req.body)
    .save()
    .then(_ => res.json({ message: "successfully created new todo" }))
    .catch(err => res.json({ message: err }));
};
exports.updateTodo = (req, res) => {
  todo
    .findById(req.params.id)
    .exec()
    .then(result => {
      // first find the obj to be updated
      const updatedObj = {
        ...result._,
        ...req.body
      };
      todo
        .findByIdAndUpdate(req.params.id, updatedObj, { new: true })
        .exec()
        .then(res => {
          res.json({ message: "Updated Todo" });
        })
        .catch(err => {
          res.json({ message: err });
        });
    })
    .catch(err => {
      res.json({ message: err });
    });
};
exports.deleteTodo = (req, res) => {
  todo
    .findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then(_ =>
      res.json({
        message: "deleted successfully"
      })
    );
};
