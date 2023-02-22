import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const GuestlistForm = ({guests, setGuests}) => {
    const [input, setInput] = useState("");

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(input)
        setGuests([...guests, {id: uuidv4(), title: input, completed: false}])
        setInput("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter a guest name"
                className="guest-input"
                required
                value={input}
                // onChange={(e) => setInput(e.target.value)}
                onChange={onInputChange}
            />
            <button className="add-button" type="submit">Add</button>
            {/* <p>{ input }</p> */}
        </form>
    // <Form>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Enter a guest name</Form.Label>
    //         <Form.Control type="email" placeholder="e.g. David Bowie" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //         Submit
    //     </Button>
    // </Form>

    );
}
 
export default GuestlistForm;