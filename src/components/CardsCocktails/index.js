import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";

function CocktailCards(props) {
  return (
    // Cards put inside column of width 3--> want xs={6}, s= 3
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.drink.strDrinkThumb}/>
      <Card.Body>
        <div className='title'>
        <Card.Title>{props.drink.strDrink}</Card.Title>
        </div>
        <Button variant="primary">More information</Button>
      </Card.Body>
    </Card>
  );
}

export default CocktailCards;
