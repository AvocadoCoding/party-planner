import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "../images/party-dance-image.png";

// import API from "../utils/API";


function Homepage() {
  return (
    <div>
      <Hero backgroundImage={backgroundImage}>
        <h1 className="heroHeader">Welcome to The Party Planner!</h1>
        <h2>Plan your food, drinks and music- plan tasks - make your guestlist and print invites!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-12">
            <h1>Food - Cocktails - Music</h1>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <p>
            Search and save for ideas for food and cocktails! Create a music playlist! 
            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
