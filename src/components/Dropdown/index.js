import Form from 'react-bootstrap/Form';
import search from "../utils/API" 


function CocktailsDropdown() {
  // handleSelect()=> {}
  
  const handleChange = (e) => {
    const { value } = e.target;
    search(value)
  }
  
  return (
    <Form.Select
    aria-label="Default select example"
    onChange={handleChange}
    >
      <option>Choose main ingredient</option>
      <option onSelect= {() => search('i=Vodka')}>Vodka</option> 
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


