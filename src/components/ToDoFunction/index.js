import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import "../ToDoFunction/ToDoList.css"

function ToDoFunction() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [task, setTask]=useState()
    const [tasks, setTasks] = useState([
        {
            title: "Task name",
            completed: true
        },
        {
            title: "Task description",
            completed: true
        },
        {
            title: "Task due date",
            completed: false
        }
    ]);
      
    useEffect(() => { 
      setTasksRemaining(tasks.filter(task => !task.completed).length) 
    });

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };
    
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
            {tasks.map((task, index) => (
                <TaskForm task={task} addTask={addTask} setTask={setTask}/>
            ))}
            </div>
        </div>
    );
}

export default ToDoFunction;