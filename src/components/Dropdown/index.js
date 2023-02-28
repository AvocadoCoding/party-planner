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
      onChange={(e) => handleChange(e)}
        >
      <option >Choose main ingredient</option>
      <option value= 'i=Vodka' >Vodka</option> 
      {/* ingredient= 'i=Vodka' */}
      {/* this.onClick= triggers funciton to update ingredient variable  */}
      <option value= 'i=Gin' >Gin</option>
      {/* i=Gin */}
      <option value= 'i=Whisky' >Whisky</option>
      {/* i=Whisky */}
      <option value= 'i=Rum' >Rum</option>
      {/* i=Whisky */}
      <option value= 'i=Beer' >Beer</option>
      {/* i=Whisky */}
      <option value= 'i=Red wine' >Red Wine</option>
      {/* i=Whisky */}
      <option value= 'i=White wine' >White Wine</option>
      {/* i=Whisky */}
      <option value= 'a=Non_Alcoholic' 
      style={{backgroundColor: '#BCFF85'}}
      >Non-alcoholic</option>
      {/* i=Non-alcoholic */}
      <option value= 'Random' 
      style={{backgroundColor: '#49C2BC'}}
      >Random</option>
      {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
    </Form.Select>
  );

}


export default CocktailsDropdown;


