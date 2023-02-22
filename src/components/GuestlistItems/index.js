import React from "react";

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
        <ul>
            {guests.map((guest) => (
                <li className="guest-item" key={guest.id}>
                    {guest.title}
                    <div>
                        <button className="button-complete" onClick={() => handleComplete(guest)}>
                        ✅
                        </button>
                        <button className="button-edit">
                        ✏️
                        </button>
                        <button className="button-delete" onClick={() => handleDelete(guest)}>
                        🗑️
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default GuestlistItems;