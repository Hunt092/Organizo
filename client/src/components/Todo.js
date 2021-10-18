import React, { useState } from 'react';
import TodoForm from './TodoForm';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



const TodoStyle = { display: 'flex', alignItems: 'stretch', backgroundColor: 'white', padding: '1em', width: '500px', justifyContent: 'space-evenly' }
function Todo({ todo, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {

        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div className='todo-row' style={TodoStyle}>
            <div onClick={() => completeTodo(todo._id)}>
                {todo.data}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo._id)}
                    className='delete-icon'
                />
                <TiEdit onClick={() => {
                    console.log(todo._id)
                    setEdit({ id: todo._id, value: todo.data })
                }}
                    className='edit-icon'
                />
            </div>
        </div>
    )
}

export default Todo
