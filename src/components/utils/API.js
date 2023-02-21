import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(`thecocktaildb.com/api/json/v1/1/filter.php?${query}`);

// Export an object with a "search" method that searches the Giphy API for the passed query
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