import '../styles/ToDoList.css';
import '../styles/Landingpage.css';
import Task from './Task'

const Tasks = ({ tasks, onDelete}) => {
    return (
        <>
            <h2 style={{ color: 'black', paddingBottom: '20px' }}>To-Do List</h2>
            {tasks.map((task) =>(
                <Task key={task.id} task={task}
                onDelete={onDelete}/>
                ))}
        </>
    )
}

export default Tasks
