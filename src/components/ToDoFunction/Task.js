import React, { useState, useEffect } from 'react';
import "../ToDoFunction/ToDoList.css"

function Task(props){

    const {task} = props;

console.log('props task',props)

return(
    <div>
        {task.title}
    </div>
)


}

export default Task;