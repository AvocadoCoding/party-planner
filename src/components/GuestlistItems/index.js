import React from "react";
import "./style.css";

const GuestlistItems = ({guests, setGuests}) => {
    
    const handleComplete = (guest) => {
        setGuests(
            guests.map((item) =>{
                if(item.id === guest.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
            );
    }

    const handleDelete = ({id}) => {
        setGuests(guests.filter((guest) => guest.id !== id));
    }


    return (
        <ul className="guestlist-items-container">
            {guests.map((guest) => (
                <li className="guest-item" key={guest.id}>
                    <input 
                    value={guest.title}
                    className= {`list ${guest.completed ? "complete" : ""}`}
                    />
                    <div className="button-container">
                        <button className="button-complete button" onClick={() => handleComplete(guest)}>
                        ✅
                        </button>
                        <button className="button-invitation button">
                        💌
                        </button>
                        <button className="button-delete button" onClick={() => handleDelete(guest)}>
                        🗑️
                        </button>
                        
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default GuestlistItems;