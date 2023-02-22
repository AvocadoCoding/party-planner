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
      <Dropdown.Item href="#/action-2">Gin</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Whisky</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Non-alcholoc</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="5">Random</Dropdown.Item>
    </DropdownButton>
  );
}

export default CocktailsDropdown;


