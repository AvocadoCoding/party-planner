import React, {useState, useEffect} from "react";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";

function ToDo() {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [guests, setGuests] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(guests));
  }, [guests]);

  return (
    <div className="guestlist-container" >
      <TodoForm
        guests={guests}
        setGuests={setGuests}
      />
      <TodoItems
        guests={guests}
        setGuests={setGuests}
      />
    </div>
  );
}
  
  export default ToDo;
 
