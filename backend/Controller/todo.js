const todo = require("../Models/todo")
const User = require("../Models/user")



exports.getAllTodos = async (req, res) => {
    const { userid } = req.params
    try {

        const todoArray = await todo.find({ authorId: userid })
        if (todoArray) {
            res.json({ todoArray })
        }
        else {
            res.status(300).send("no Todo found")
        }
    }
    catch {
        res.status(500).send("Server issue")
    }


}

exports.getTodo = async (req, res) => {
    const { todoId } = req.params
    try {
        const ToDo = await todo.findById(todoId)
        if (ToDo) {
            res.send(ToDo)
        }
        else {
            res.status(400).send("No todo found")
        }
    }
    catch {
        res.status(500).send("Server issue")
    }

}

exports.createTodo = async (req, res) => {
    const { userId } = req.params
    try {
        const user = await User.findById(userId)
        if (user) {
            const Todo = new todo({
                ...req.body,
                authorId: userId
            })
            user.todo.push(Todo)
            await Todo.save()
            await user.save()
            res.status(201).send("Todo ADDED")
        } else {
            res.status(400).send("Invalid USer")
        }
    }
    catch {
        res.status(500).send("Some Error Occured")
    }

}

exports.updateTodo = (req, res) => {
    const { todoId } = req.params
    try {
        todo.findOneAndUpdate({ _id: todoId }, {
            ...req.body
        }).then(
            res.status(201).send("Updated Todo")
        ).catch(err => res.status(500).send("Error", err))
    }
    catch {
        res.status(500).send("Error")
    }
}

exports.deleteTodo = async (req, res) => {
    const { todoId } = req.params
    try {
        const ToDo = await todo.findById(todoId)
        const user = await User.findById(ToDo.authorId)
        if (user) {
            const newToDoArray = user.todo.filter(tid => tid != todoId)
            user.todo = newToDoArray
            await user.save()
            todo.findByIdAndDelete(todoId).then(
                res.send("deleted")
            )
        }
        else {
            res.status(400).send("No todo found")
        }
    }
    catch {
        res.status(500).send("Server issue")
    }

}