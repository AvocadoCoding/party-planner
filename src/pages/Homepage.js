import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backgroundImage from "../images/party-dance-image.png";

import CocktailsDropdown from "../components/Dropdown";
import { useState, useEffect } from "react";

import search from "../components/utils/API";


import CocktailCards from "../components/CardsCocktails";


function Homepage() {

  // get local storage for button toogle, if nothing in local storage return
  // empty array
  const initialState = JSON.parse(localStorage.getItem("drinks")) || [];
  const [drinkStorage, setDrinkStorage] = useState(initialState);

  
  useEffect(() => {
    localStorage.setItem("drinks", JSON.stringify(drinkStorage));
  }, [drinkStorage]);

  // set useState value for user ingredient selection
  const  [ingredient, setIngredient]= useState("");
  // useState array variable to hold API response
  const  [drinksAPI, setDrinksAPI]= useState([]);


 
  // only trigger function when ingredient changes
  useEffect(()=>{
  // take ingredient state values and run API
  // if function to choose API call 
  if (ingredient && ingredient !== 'Random'){  
    search.searchIngredient(ingredient)
    .then(drinks=>setDrinksAPI((drinks.data.drinks)))
    .catch(err=>console.log(err))
  } else if (ingredient && ingredient === 'Random'){
    search.searchRandom()
    .then(drinks=>setDrinksAPI(drinks.data.drinks))
    .catch(err=>console.log(err))
  }
  },[ingredient])
 
  return (
    <div style={{backgroundColor: '#FEE1C7'}}>
      <Hero backgroundImage={backgroundImage}>
        <h1 className="heroHeader">Welcome to The Party Planner!</h1>
        <h2>Plan your drinks, tasks, make your guestlist and print invites!</h2>
      </Hero>
      <Container style={{ marginTop: 30, backgroundColor: '#FEE1C7' }}>
        <Row>
          <Col size="sm-12">
            <h1> - Cocktails - </h1>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <p>
            Search and save ideas for cocktails! 
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
        <br/>
        <Row>
        {/* Four cocktail cards will go here, but will be retuend via mapping component */}
        {drinksAPI.map((currentDrink)=> (
        <Col xs={12} sm={6} lg={3} 
        key={currentDrink.idDrink}
        >
        <CocktailCards 
        drink= {currentDrink}
        drinkStorage={drinkStorage}
        setDrinkStorage={setDrinkStorage}/>
        </Col>
        ))}
        </Row>

      </Container>
    </div>
  );
}

export default Homepage;
