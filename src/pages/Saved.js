import React, { useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import search from "../components/utils/API";


function Saved() {

// get local storage for button toggle, if nothing in local storage return
// empty array
const initialState = JSON.parse(localStorage.getItem("drinks")) || [];
const [drinkStorage, setDrinkStorage] = useState(initialState);
console.log(drinkStorage);

 // useState and functions for modal window appearance
 const [show, setShow] = useState(false);

   // useState to capture returned API response
   const [modalAPI, setModalAPI] = useState([]);

//Function to delete item from array by filtering by id
const handleDelete = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  setDrinkStorage(drinkStorage.filter((drink) => drink.key !== e.target.value));
}

  // modal window close function
  const handleClose = () => setShow(false);

    // modal window open function with API call
  const handleShow = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    search
      .searchID(e.target.value)
      .then((drink) => setModalAPI(drink.data.drinks))
      .catch((err) => console.log(err));
    setShow(true);
  };
  console.log(modalAPI);


//useEffect function to update local storage when drinkStorage array changes
useEffect(() => {
  localStorage.setItem("drinks", JSON.stringify(drinkStorage));
}, [drinkStorage]);


// Map saved local storage drinks to cards in page
  return (
    <div>
      <Row colSpan="12">-</Row>
    <Row>
      <h1 style={{ textAlign: "center" }}>Your favourited drinks are saved here!</h1>
    </Row>
    <Row>
    {drinkStorage.map((currentDrink)=> (
      <Col xs={12} sm={6} lg={3} key={currentDrink.key}>
        <Card style={{ width: '18rem', margin: '10px', borderColor: 'black'}}>
          <Card.Img variant="top" src={currentDrink.image}/>
            <Card.Body style={{backgroundColor: '#49C2BC'}}>
              <div className='title'>
              <Card.Title>{currentDrink.name}</Card.Title>
              </div>
              
            
             
                
                {/* Modal button*/}
        <div className="buttonContainer">
          <Button
            value={currentDrink.key}
            onClick={(e) => handleShow(e)}
            style={{
              color: "black",
              backgroundColor: "#FA7B55",
              borderColor: "black",
            }}
          >
            Ingredients and Instructions
          </Button>
        </div>
                
                {/* Delete button to remove item */}
                <button className="button-delete button" 
                value ={currentDrink.key}
                onClick={(e) => handleDelete(e)}>
                        🗑️
                </button>

             {/* Modal content */}
             {modalAPI.map((drinkID) => (
          <Modal show={show} onHide={handleClose} key={drinkID.idDrink}>
            <Modal.Header closeButton>
              <Modal.Title>{drinkID.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Instructions</h3>
              <p>{drinkID.strInstructions}</p>
              <h3>Ingredients</h3>
              <ul>
                <li>
                  {drinkID.strIngredient1} {drinkID.strMeasure1}
                </li>
                <li>
                  {drinkID.strIngredient2} {drinkID.strMeasure2}
                </li>
                <li>
                  {drinkID.strIngredient3} {drinkID.strMeasure3}
                </li>
                <li>
                  {drinkID.strIngredient4} {drinkID.strMeasure4}
                </li>
                <li>
                  {drinkID.strIngredient5} {drinkID.strMeasure5}
                </li>
                <li>
                  {drinkID.strIngredient6} {drinkID.strMeasure6}
                </li>
                <li>
                  {drinkID.strIngredient7} {drinkID.strMeasure7}
                </li>
                <li>
                  {drinkID.strIngredient8} {drinkID.strMeasure8}
                </li>
                <li>
                  {drinkID.strIngredient9} {drinkID.strMeasure9}
                </li>
                <li>
                  {drinkID.strIngredient10} {drinkID.strMeasure10}
                </li>
                <li>
                  {drinkID.strIngredient11} {drinkID.strMeasure11}
                </li>
                <li>
                  {drinkID.strIngredient12} {drinkID.strMeasure12}
                </li>
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
      </Col>
      ))}
    </Row>
    </div>
  );
}

export default Saved;