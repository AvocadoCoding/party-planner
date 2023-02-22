import React, {useState} from "react";

const Form = ({cocktailSearch, setCocktailSearch}) =>{
    const[input, setInput] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>#
            <input
                type="text"
                placeholder="Enter cocktail main ingredient"
                className="guest-input"
                value={input}
            />
            <button className="add-button" type="submit">Search</button>
        </form>    
    ); 
}

export default Form;