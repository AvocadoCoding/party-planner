import React, { useState, useEffect } from 'react';
import 

function TaskForm(props){
    const {task} = props;

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>{task.title}:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )


}

export default TaskForm;