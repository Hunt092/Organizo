import React, { useState, useEffect, useRef } from 'react'

const TodoForm = ({ onSubmit, current, Resetall, isEdit }) => {
    const [input, setInput] = useState('');
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('')
    const inputRef = useRef(null)




    const handleSubmit = e => {
        e.preventDefault();
        let datestring = date || Date()
        console.log(datestring)
        isEdit ? onSubmit(current._id, {
            date: Date(),
            data: input,
            tobeDone: datestring,
            Priority: priority,

        }) :
            onSubmit({
                date: Date(),
                data: input,
                tobeDone: datestring,
                Priority: priority,

            })
        setInput('');
        Resetall()
    };
    useEffect(() => {
        if (current) {
            console.log(current)
            setInput(current.data)
            setDate(current.tobeDone)
            setPriority(current.Priority)
        }
    }, [current])
    return (
        <div className="todoform__container" >
            <form className="todoform" onSubmit={handleSubmit}>
                <div className="todoform__data">
                    <label htmlFor="Todo">What's on your MIND</label>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="Todo"
                        className='todo-input'
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="todoform__date">
                    <label htmlFor="Date">Schedule</label>
                    <input type="date" name="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="todoform__priority">
                    <label htmlFor="priority">Priority</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} name="priority">
                        <option value=''>Select One</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button className='todoform__button'>Add todo</button>

            </form>
        </div>
    )
}

export default TodoForm
