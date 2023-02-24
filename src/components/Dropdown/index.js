import Form from 'react-bootstrap/Form';
// import search from "../utils/API" 


function CocktailsDropdown({ingredient, setIngredient}) {

  const handleChange=(e) => {
    e.preventDefault();
    setIngredient(e.target.value);
    }

  return (
    <Form.Select
    aria-label="Default select example"
    // When the form select is changed the ingredient variable 
    // in the useState dunction is changed to the target.value attibute value
        >
      <option>Choose main ingredient</option>
      <option value= 'i=Vodka' onClick={ (e) => handleChange(e)}>Vodka</option> 
      {/* ingredient= 'i=Vodka' */}
      {/* this.onClick= triggers funciton to update ingredient variable  */}
      <option value= 'i=Gin' onClick={ (e) => handleChange(e)}>Gin</option>
      {/* i=Gin */}
      <option value= 'i=Whisky' onClick={ (e) => handleChange(e)}>Whisky</option>
      {/* i=Whisky */}
      <option value= 'i=Rum' onClick={ (e) => handleChange(e)}>Rum</option>
      {/* i=Whisky */}
      <option value= 'i=Beer' onClick={ (e) => handleChange(e)}>Beer</option>
      {/* i=Whisky */}
      <option value= 'i=Red wine' onClick={ (e) => handleChange(e)}>Red Wine</option>
      {/* i=Whisky */}
      <option value= 'i=White wine' onClick={ (e) => handleChange(e)}>White Wine</option>
      {/* i=Whisky */}
      <option value= 'a=Non_Alcoholic' onClick={ (e) => handleChange(e)}>Non-alcoholic</option>
      {/* i=Non-alcoholic */}
      <option value= 'Random' onClick={ (e) => handleChange(e)}>Random</option>
      {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
    </Form.Select>
  );

}


export default CocktailsDropdown;


