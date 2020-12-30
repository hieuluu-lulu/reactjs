import React, { useState, useEffect } from 'react';
import './App.css';

function Task ({task,index, completeTask, removeTask}) {
    return (
        <div 
            className = "task" 
            style = {
                {textDecoration: task.completed? "line-through" : ""}
            }>
            <input className = "checkbox"type = "checkbox" onClick = {() => completeTask(index)} />
            {task.title} 
            <button onClick={() => removeTask(index)}>Delete</button>
            
        </div>
    )
}
function CreateTask({addTask}){
    const [value, setValue] = useState("");

    const handleAdd = () => {
        if(!value) return ;
        addTask(value);
        setValue("");
    }
    return (
        <div className="Add">
            <input
            type = "text"
            className = "input"
            value = {value}
            placeholder = "Add new task"
            onChange = {e => {
                setValue(e.target.value);
                }
            }  
            />
            <input type="button" className = "btn" value = "Add" onClick = {handleAdd}/>
        </div>
    )
}
function Todo(){
    const [task, setTask] = useState([
        {
            title : "Hello các cậu",
            completed : false,
        },
        {
          title : "Nhật ngu vãi lol",
          completed : false,
        },
        {
            title : "Ahihi",
            completed : false,
        }
    ]);
    const addTask = title =>{
        const newTasks = [...task,{
            title, completed: false,
        }];
        setTask(newTasks);
    }
    const completeTask = index => {
        const newTasks = [...task];
        if (task[index].completed === false) {
            newTasks[index].completed = true;
            setTask(newTasks);
        }
        else{
            newTasks[index].completed = false;
            setTask(newTasks);
        }
    };
    const removeTask = index => {
        const newTasks = [...task];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };
    return (
        <div className="todo-container">
            <div className="header">TODO-ITEMS</div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            <div>
                {task.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                    />
                ))}
            </div>
        </div>
         
    )
}

export default Todo;