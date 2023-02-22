import React, {useState} from "react";
import Form from "../components/GuestlistForm";


function Guestlist() {
  const [guests, setGuests] = useState([]);

  return (
    <div>
      <Form
        guests={guests}
        setGuests={setGuests}
      />
    </div>
  );
}

export default Guestlist;