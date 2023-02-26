import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState} from 'react';
import search from "../utils/API";
import FavouriteButton from "../FavouriteButton";
import "./style.css";

function CocktailCards(props) {

  
  // useState to capture returned API response
  const [modalAPI, setModalAPI]= useState([]);
 
  // useState and functions for modal window appearance
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
  
  // Need to add API call in this part
  const handleShow = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    search.searchID(e.target.value)
    .then(drinks=>setModalAPI(drinks.data.drinks))
    .catch(err=>console.log(err));
    setShow(true);
  }
  console.log(modalAPI);
 
  return (
    // Cards put inside column of width 3--> want xs={6}, s= 3
    <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={props.drink.strDrinkThumb}/>
      <Card.Body style={{backgroundColor: '#49C2BC'}}>
        <div className='title'>
        <Card.Title>{props.drink.strDrink}</Card.Title>
        </div>
      
      {/* Modal button and modal content */}
        <div className="buttonContainer">
        <Button value={props.drink.idDrink} onClick={(e) => handleShow(e)} 
        style={{ color: 'black', backgroundColor: '#FA7B55', border: 'black'}}
        >
        Ingredients and Instructions
      </Button>
      </div>
      {/* Favourite button */}
      <div className="buttonContainer">
      <FavouriteButton value={props.drink.idDrink}/>
      </div>
    {modalAPI.map((drinkID)=>(
      <Modal show={show} onHide={handleClose} key={drinkID.idDrink}>
        <Modal.Header closeButton>
          <Modal.Title>{drinkID.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Instructions</h3>
          <p>{drinkID.strInstructions}</p>
          <h3>Ingredients</h3>
          <ul>
            <li>{drinkID.strIngredient1} {drinkID.strMeasure1}</li>
            <li>{drinkID.strIngredient2} {drinkID.strMeasure2}</li>
            <li>{drinkID.strIngredient3} {drinkID.strMeasure3}</li>
            <li>{drinkID.strIngredient4} {drinkID.strMeasure4}</li>
          </ul>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       ))} 
      </Card.Body>
    </Card>
  );
}

export default CocktailCards;
