import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "../Col";

function CocktailCards() {
  return (
    // Cards put inside column of width 3--> want xs=6, s= 3
    <Col size= "sm-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default CocktailCards;
