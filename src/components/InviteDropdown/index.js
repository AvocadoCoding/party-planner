import Form from 'react-bootstrap/Form';
// import search from "../utils/API" 




function InviteDropdown() {

// get gues names from local storage
  const guests = JSON.parse(localStorage.getItem("guests")) || [];


  return (
    <Form.Select
    aria-label="Default select example"
        >
      
      <option >Choose guest</option>
      
      {guests.map((guest)=> (
      <option key= {guest.id} >{guest.title}</option> 
      ))}

    </Form.Select>
  );

}


export default InviteDropdown;


