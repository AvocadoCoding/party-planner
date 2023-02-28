import React, { useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Saved() {

// get local storage for button toogle, if nothing in local storage return
// empty array
const initialState = JSON.parse(localStorage.getItem("drinks")) || [];
const [drinkStorage, setDrinkStorage] = useState(initialState);
console.log(drinkStorage);

//Function to delete item from array by filtering by id
const handleDelete = ({id}) => {
  console.log(id);
  setDrinkStorage(drinkStorage.filter((drink) => drink.key !== id));
}


// Map saved local storage drinks to cards in page
  return (
    <Row>
    {drinkStorage.map((currentDrink)=> (
      <Col xs={12} sm={6} lg={3} key={currentDrink.key}>
        <Card style={{ width: '18rem', margin: '10px', borderColor: 'black'}}>
          <Card.Img variant="top" src={currentDrink.image}/>
            <Card.Body style={{backgroundColor: '#49C2BC'}}>
              <div className='title'>
              <Card.Title>{currentDrink.name}</Card.Title>
              </div>
                <h3>Instructions</h3>
                <p>{currentDrink.strInstructions}</p>
                <h3>Ingredients</h3>
                <ul>
                  <li>{currentDrink.strIngredient1} {currentDrink.strMeasure1}</li>
                  <li>{currentDrink.strIngredient2} {currentDrink.strMeasure2}</li>
                  <li>{currentDrink.strIngredient3} {currentDrink.strMeasure3}</li>
                  <li>{currentDrink.strIngredient4} {currentDrink.strMeasure4}</li>
                </ul>
                {/* Delete button to remove item */}
                <button className="button-delete button" 
                onClick={() => handleDelete(currentDrink.key)}>
                        🗑️
                </button>
            </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>

    
  );
}

export default Saved;