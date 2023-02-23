import Form from 'react-bootstrap/Form';
import search from "../utils/API" 
import { useState } from "react";


function CocktailsDropdown() {
  // handleSelect()=> {}
  

  const  [ingredient, setIngredient]= useState("");
  
  return (
    <Form.Select
    aria-label="Default select example"
    // When the form select is changed the ingredient variable 
    // in the useState dunction is changed to the target.value attibute value
    onChange={ (e) => {
      e.preventDefault();
      setIngredient(e.target.value);
      console.log(ingredient);
      }
    }
    >
      <option>Choose main ingredient</option>
      <option value= 'i=Vodka'>Vodka</option> 
      {/* ingredient= 'i=Vodka' */}
      {/* Should I add something like: */}
      {/* this.onClick= search(ingredient)  */}
      <option value= 'i=Gin'>Gin</option>
      {/* i=Gin */}
      <option value= 'i=Whisky'>Whisky</option>
      {/* i=Whisky */}
      <option value= 'a=Non_Alcoholic'>Non-alcoholic</option>
      {/* i=Non-alcoholic */}
      <option value= 'Random'>Random</option>
      {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
    </Form.Select>
  );

}


export default CocktailsDropdown;


