import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import search from "../utils/API";

function FavouriteButton({value, drinkStorage, setDrinkStorage}){

    // console.log(typeof drinkStorage);
    // console.log(drinkStorage);
    
    // useState for favourite button colour change
    const [colour, setColor]= useState ("");

    // search to see if id is present in drinksstorage array and toggle favourite button 
    // colour accordingly
    const btnIdSearch =value;
    const indexBtn = drinkStorage.findIndex((element)=>element.id === btnIdSearch);
    if(indexBtn === -1){
      setColor("white")
    }else{
      setColor("light red")
    }

  

    // useLocalStorage library for local storage
    // const [favouriteDrink, setFavouriteDrink] = useLocalStorage([])

    // Need to add API call in this part
  const handleFavourite = (e) => {
    
    // search drinkStorage array to see if ID is already present
    const idSearch = e.target.value;
    const index = drinkStorage.findIndex((element)=>element.id === idSearch);
    
    if(index === -1){
        e.preventDefault();
        console.log(e.target.value)
        search.searchID(e.target.value)
        .then(response=>{
        const drinksObject = Object.assign({},
        {
            id: response.data.drinks[0].idDrink,
            name: response.data.drinks[0].strDrink,
            image: response.data.drinks[0].strDrinkThumb,
            instructions: response.data.drinks[0].strInstructions,
            ingredients1: response.data.drinks[0].strIngredient1,
            ingredients2: response.data.drinks[0].strIngredient2,  
            ingredients3: response.data.drinks[0].strIngredient3,  
            ingredients4: response.data.drinks[0].strIngredient4,  
            ingredients5: response.data.drinks[0].strIngredient5,  
            ingredients6: response.data.drinks[0].strIngredient6,  
            ingredients7: response.data.drinks[0].strIngredient7,  
            ingredients8: response.data.drinks[0].strIngredient8,  
            ingredients9: response.data.drinks[0].strIngredient9,
            ingredients10: response.data.drinks[0].strIngredient10,    
            ingredients11: response.data.drinks[0].strIngredient11,  
            ingredients12: response.data.drinks[0].strIngredient12,  
            ingredients13: response.data.drinks[0].strIngredient13,  
            ingredients14: response.data.drinks[0].strIngredient14,  
            ingredients15: response.data.drinks[0].strIngredient15,
            measure1: response.data.drinks[0].strMeasure1,
            measure2: response.data.drinks[0].strMeasure2,  
            measure3: response.data.drinks[0].strMeasure3,  
            measure4: response.data.drinks[0].strMeasure4,  
            measure5: response.data.drinks[0].strMeasure5,  
            measure6: response.data.drinks[0].strMeasure6,  
            measure7: response.data.drinks[0].strMeasure7,  
            measure8: response.data.drinks[0].strMeasure8,  
            measure9: response.data.drinks[0].strMeasure9,
            measure10: response.data.drinks[0].strMeasure10,    
            measure11: response.data.drinks[0].strMeasure11,  
            measure12: response.data.drinks[0].strMeasure12,  
            measure13: response.data.drinks[0].strMeasure13,  
            measure14: response.data.drinks[0].strMeasure14,  
            measure15: response.data.drinks[0].strMeasure15,
          })
        
          console.log(drinksObject);
        // setDrinkStorage(drinkStorage.push(drinksObject))
        setDrinkStorage([...drinkStorage, drinksObject])
        console.log(typeof drinkStorage);
        console.log(drinkStorage);
        localStorage.setItem("drinks", JSON.stringify(drinkStorage))
        
        })   
        } else {
          setDrinkStorage([drinkStorage.splice(index,1)]);
          localStorage.setItem("drinks", JSON.stringify(drinkStorage))
        };

  }
 
  

    // add if function here, response depends on if drink is in local storage yet or not
/*     setDrinks(
        drinks.map((item)=>{
            if (item.idDrink === e.target.value){
                use splice to remove an item, find index of id and then splice that index
                // if already present then remove that drink from local storge
            }else(){
            console.log(e.target.value);
            search.searchID(e.target.value)
            .then(drinkAPI=>setDrinks(drinkAPI.data.drinks))
            .catch(err=>console.log(err));
            setDrinks(...drinks, {idDrink: drinkAPI.data.drinks, imgDrink:  })
            } 

        })
    )
  
  } */

    return(
    <Button 
        value={value}
        onClick={(e) => handleFavourite(e)}
        style={{ color: 'black', backgroundColor: {colour}, 
        borderColor: 'black'}}
        >
        Favourite
      </Button>
    )

}

export default FavouriteButton;