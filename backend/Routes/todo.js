const { Router } = require('express');
const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../Controller/todo');


const TodoRouter = Router()

TodoRouter.get("/getall/:userid", getAllTodos)
TodoRouter.get("/:todoId", getTodo)
TodoRouter.post("/create/:userId", createTodo)
TodoRouter.patch("/update/:todoId", updateTodo)
TodoRouter.delete("/delete/:todoId", deleteTodo)

module.exports = TodoRouter;