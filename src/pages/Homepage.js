import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "../images/party-dance-image.png";

import CocktailsDropdown from "../components/Dropdown";
import { useState, useEffect } from "react";

import search from "../components/utils/API";

import CocktailCards from "../components/CardsCocktails";


function Homepage() {

  // set useState value for user ingredient selection
  const  [ingredient, setIngredient]= useState("");
  // useState array variable to hold API response
  const  [drinksAPI, setDrinksAPI]= useState([]);
  console.log(drinksAPI);
  // only trigger function when ingredient changes
  useEffect(()=>{
  // take ingredient state values and run API
  // if function to choose API call 
  if (ingredient && ingredient !== 'Random'){  
    search.searchIngredient(ingredient)
    .then(drinks=>setDrinksAPI(drinks.data.drinks))
    .catch(err=>console.log(err))
  } else if (ingredient && ingredient === 'Random'){
    search.searchRandom()
    .then(drinks=>setDrinksAPI(drinks.data.drinks))
    .catch(err=>console.log(err))
  }
  },[ingredient])
 
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
        <Col size="sm-3">
          <h2>Cocktail Search</h2>
          {/* Call in CocktailsDropdown component and pass in empty useState values */}
          <CocktailsDropdown ingredient={ingredient} setIngredient= {setIngredient} />
        </Col>
        </Row>
        <Row>
        {/* Four cocktail cards will go here */}
        <CocktailCards/>
        </Row>

      </Container>
    </div>
  );
}

export default Homepage;
