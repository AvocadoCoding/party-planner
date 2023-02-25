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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.drink.strDrinkThumb}/>
      <Card.Body>
        <div className='title'>
        <Card.Title>{props.drink.strDrink}</Card.Title>
        </div>
      
      {/* Modal button and modal content */}
      
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
