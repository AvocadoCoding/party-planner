import React from "react";

const GuestlistItems = ({guests, setGuests}) => {
    console.log(guests)
    return (
        <ul>
            {guests.map((guest) => (
                <li className="guest-item" key={guest.id}>
                    {guest.title}
                    <div>
                        <button className="button-complete">
                        ✅
                        </button>
                        <button className="button-edit">
                        ✏️
                        </button>
                        <button className="button-delete">
                        🗑️
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default GuestlistItems;