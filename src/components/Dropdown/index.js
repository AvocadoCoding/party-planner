import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CocktailsDropdown() {
  return (
    <DropdownButton 
        id="dropdown-basic-button" 
        title="Cocktail Main Ingredient"
        variant="danger"
        >
      <Dropdown.Item href="#/action-1">Vodka</Dropdown.Item> 
      {/* ingredient= 'i=Vodka' */}
      {/* Should I add something like: */}
      {/* this.onClick= search(ingredient)  */}
      <Dropdown.Item href="#/action-2">Gin</Dropdown.Item>
      {/* i=Gin */}
      <Dropdown.Item href="#/action-3">Whisky</Dropdown.Item>
      {/* i=Whisky */}
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Non-alcoholic</Dropdown.Item>
      {/* i=Non-alcoholic */}
      <Dropdown.Divider />
      <Dropdown.Item eventKey="5">Random</Dropdown.Item>
      {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
    </DropdownButton>
  );
}

export default CocktailsDropdown;


