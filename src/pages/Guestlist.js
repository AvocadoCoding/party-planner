import React, {useState} from "react";
import GuestlistForm from "../components/GuestlistForm";
import GuestlistItems from "../components/GuestlistItems";

function Guestlist() {
  const [guests, setGuests] = useState([]);
  console.log(guests)
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