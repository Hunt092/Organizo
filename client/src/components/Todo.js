import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';




function Todo({ todo, completeTodo, removeTodo, setcurrent, setEdit }) {
    let parsedDate = todo.tobeDone ? new Date(todo.tobeDone) : new Date()
    let datestring = parsedDate.toLocaleDateString()

    const handleUpdate = () => {
        setcurrent(todo)
        setEdit(true)
    }

    return (
        <div className='todo' style={todo.status ? { color: 'green' } : {}}  >

            <div className="todo__content" onDoubleClick={todo.status || todo.status == "Undone" ? "" : handleUpdate}>
                <div className="todo__header">
                    <div >
                        {todo.data}
                    </div>
                    <div className="todo__control">
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo._id)}
                            className='delete-icon'
                        />
                        {todo.status || todo.status == "Undone" ? '' :
                            <TiEdit onClick={() => handleUpdate()}
                                className='edit-icon'
                            />
                        }
                    </div>
                </div>
                <p className="todo__date">{datestring}</p>
            </div>
            <div className="todo__toggle" onClick={() =>
                completeTodo(todo)
            }>
                <div className={todo.status ? "todo__togglechecker todo__togglechecker--active" : "todo__togglechecker"}></div>
            </div>

        </div>
    )
}

export default Todo
