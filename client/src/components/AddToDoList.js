import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import '../styles/AddToDo.css';
import { useStateValue } from '../Store/StateProvider';
import { createTodo, deleteTodo, updateToDo } from '../api/db';

function AddToDoList() {
    const [{ user, todo }, dispatch] = useStateValue()
    const [todos, setTodos] = useState([]);
    const [isEdit, setEdit] = useState(false)
    const [isAdd, setAdd] = useState(false)
    useEffect(() => {
        setTodos(todo)
    }, [todo])

    const addTodo = todo => {
        if (!todo.data || /^\s*$/.test(todo.data)) {
            return;
        }

        (async () => {
            const { message, todoId } = await createTodo(todo, user)
            const newTodo = { ...todo, _id: todoId }
            console.log("todo After", newTodo)
            const newTodos = [...todos, newTodo];
            alert(message)
            dispatch({
                type: 'UPDATE__TODOS',
                todos: newTodos
            })

        })()
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.data || /^\s*$/.test(newValue.data)) {
            return;
        }
        (async () => {
            const res = await updateToDo(newValue, todoId)
            const UpdatedArray = todos.map(item => (item._id === todoId ? { ...item, ...newValue } : item))
            alert(res)
            dispatch({
                type: 'UPDATE__TODOS',
                todos: UpdatedArray
            })
        })()
    }

    const removeTodo = id => {
        (async () => {
            const res = await deleteTodo(id)
            const removeArr = todos.filter(todo => todo._id !== id);
            dispatch({
                type: 'UPDATE__TODOS',
                todos: removeArr
            })
            alert(res)
        })()
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo._id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <h1>What's the plan for today??</h1>
            {
                isAdd || isEdit ? <TodoForm onSubmit={addTodo} />
                    :
                    todos.map((todo) => (
                        <Todo todo={todo} key={todo._id} completeTodo={completeTodo} removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    ))

            }
        </div>
    )
}

export default AddToDoList
