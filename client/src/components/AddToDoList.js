import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import { useStateValue } from '../Store/StateProvider';
import { createTodo, deleteTodo, updateToDo } from '../api/db';
import '../styles/Todo.css'

function AddToDoList() {
    const [{ user, todo }, dispatch] = useStateValue()
    const [todos, setTodos] = useState([]);
    const [isEdit, setEdit] = useState(false)
    const [isAdd, setAdd] = useState(false)
    const [currenttodo, setcurrent] = useState(null)


    const Resetall = () => {
        setEdit(false)
        setAdd(false)
        setcurrent({})
    }

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

    const completeTodo = toupdatetodo => {
        (async () => {
            const newtodo = { ...toupdatetodo, status: !toupdatetodo.status }
            await updateToDo(newtodo, toupdatetodo._id)
            const updatedTodos = todos.map(todo => (
                todo._id === toupdatetodo._id ? { ...todo, status: !todo.status } : todo
            ))
            dispatch({
                type: 'UPDATE__TODOS',
                todos: updatedTodos
            })
        })()
    }


    useEffect(() => {
        setTodos(todo)
    }, [todo])

    return (
        <div className="todopage" >
            <div className="todopage__header">
                <h1 className='todo__title' >What's the plan for today??</h1>
                <span className="todoheader__toggle" onClick={isAdd || isEdit ? () => Resetall() : () => setAdd(!isAdd)}>{isAdd || isEdit ? "Back" : "Add"}</span>
            </div>
            <div className="todopage__content">
                {
                    isAdd || isEdit ? <TodoForm onSubmit={isEdit ? updateTodo : addTodo} current={currenttodo} Resetall={Resetall} isEdit={isEdit} />
                        :
                        todos.map((todo) => (
                            <Todo todo={todo} key={todo._id} completeTodo={completeTodo} removeTodo={removeTodo}
                                setcurrent={setcurrent}
                                setEdit={setEdit}
                            />
                        ))

                }
            </div>
        </div >
    )
}

export default AddToDoList
