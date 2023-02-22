import React from "react";

const Form = ({guests, setGuests}) => {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter a guest name"
                classsName="guest-input"
                value={input}
            />
            <button className="add-button" type="submit">Add</button>
        </form>

    );
}
 
export default Form;