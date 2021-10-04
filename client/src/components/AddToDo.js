import React from 'react'

const AddToDo = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time' />
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox' />
            </div>

            <input type='submit' value='Save Task' />
        </form>
    )
}

export default AddToDo