import React, { useState } from 'react';

const Todo = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [clicked, setClicked] = useState(false);
    
    const addtask = (e) =>{
        e.preventDefault();
        let task = e.target.task.value
        setTask(task)
        tasks.push({task: task, clicked: false })
        console.log(tasks)
    }


    const onCLickhandler = (i) =>{
        let newtasks = [...tasks]
        newtasks[i].clicked = !newtasks[i].clicked
        setTasks(newtasks)
    }


    const deletetask = (e) => {
        e.preventDefault()
        console.log(e.target.oscar.value)
        let filteredtasks = tasks.filter((task) => (task.task != e.target.oscar.value ))
        console.log(filteredtasks)
        setTasks(filteredtasks)
    }


    const checked ={
        textDecoration: 'line-through',
        textDecorationStyle: 'solid',
    }
    const flex ={
        display: 'flex',
    }


    
    return (
        <div>
            <form onSubmit ={( addtask )} >
                <input name="task"></input>
                <br></br>
                <button>Add</button>
            </form>
            <div>
                    {
                        tasks.map((task, i) => 
                        <form onSubmit= {( deletetask )}>
                            {(task.clicked === true ?
                            <p style={ checked }>{ task.task }</p>:
                            <p>{ task.task }</p>
                            )}
                            <input name="oscar" value ={task.task} type="checkbox" onChange={ (e) => onCLickhandler(i)}></input>
                            <button>delete</button>
                        </form> )}
            </div>
        </div>
    )
}




export default Todo;