import React, {useState, useEffect} from "react";
import GuestlistForm from "../components/GuestlistForm";
import GuestlistItems from "../components/GuestlistItems";

function Guestlist() {

  const initialState = JSON.parse(localStorage.getItem("guests")) || [];
  const [guests, setGuests] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  return (
    <div>
      <GuestlistForm
        guests={guests}
        setGuests={setGuests}
      />
      <GuestlistItems
        guests={guests}
        setGuests={setGuests}
      />
    </div>
  );
}

export default Guestlist;