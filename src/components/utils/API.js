import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;



// Using axios, we create a search method that is specific to our use case and export it at the bottom

const search = {
  searchRandom: () => axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/random.php`),
  searchIngredient: (query) => axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?${query}`),
  searchID: (query) => axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${query}`)
}

// How to call
//search.searchRandom()
//search.searchIngredient(value)

// Export an object with a "search" method that searches the CocktailDB API for the passed query
export default search;


// CocktailDB API

// Can use the test API key "1" during development of app in CocktailDB

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// Filter by alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Want to search by main alcoholic ingredient (?i=), or for non-alcoholic, so we need (?a=Non_Alcoholic)
// Use dropdown list for the user input

// Also include random button for random cocktail?
// www.thecocktaildb.com/api/json/v1/1/random.php

// Need to save drink information to local storage
// Save drink ID attribute to be able to check if drink is already in local storage or not