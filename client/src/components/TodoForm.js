import React, { useState, useEffect, useRef } from 'react'

const TodoForm = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            data: input
        });

        setInput('');
    };
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a todo"
                    value={input}
                    name="text"
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button'>Add todo</button>

            </form>
        </div>
    )
}

export default TodoForm
