import React, { useState, useEffect } from 'react';

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