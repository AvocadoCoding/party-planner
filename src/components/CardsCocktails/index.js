import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import "./style.css";

function CocktailCards(props) {

  // useState and functions for modal window appearance
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // Cards put inside column of width 3--> want xs={6}, s= 3
    <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={props.drink.strDrinkThumb}/>
      <Card.Body style={{backgroundColor: '#49C2BC'}}>
        <div className='title'>
        <Card.Title>{props.drink.strDrink}</Card.Title>
        </div>
      
      {/* Modal button and modal content */}
      
        <Button onClick={handleShow} 
        style={{ color: 'black', backgroundColor: '#FA7B55', border: 'black'}}
        >
        Ingredients and Instructions
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.drink.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Instructions</h3>
          <p>Instructions</p>
          <h3>Ingredients</h3>
          <p>Unordered list of ingredients</p>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
      </Card.Body>
    </Card>
  );
}

export default CocktailCards;
