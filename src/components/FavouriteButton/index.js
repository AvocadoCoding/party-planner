import React from 'react';
import Button from 'react-bootstrap/Button';
import search from "../utils/API";

function FavouriteButton({value, drinkStorage, setDrinkStorage}){

    // console.log(typeof drinkStorage);
    // console.log(drinkStorage);
    
    // useState for favourite button colour change
    // const [colour, setColor]= useState ("white");

    // useLocalStorage library for local storage
    // const [favouriteDrink, setFavouriteDrink] = useLocalStorage([])

    // Need to add API call in this part
  const handleFavourite = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    search.searchID(e.target.value)
    .then(response=>{
        const drinksObject = Object.assign({},
        {
            id: response.data.drinks[0].idDrink,
            name: response.data.drinks[0].strDrink,
            image: response.data.drinks[0].strDrinkThumb 
        });
        console.log(drinksObject);
        // setDrinkStorage(drinkStorage.push(drinksObject))
        setDrinkStorage([...drinkStorage, drinksObject])
        console.log(typeof drinkStorage);
        console.log(drinkStorage);
        localStorage.setItem("drinks", JSON.stringify(drinkStorage))
    })
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
        style={{ color: 'black', backgroundColor: 'white', 
        borderColor: 'black'}}
        >
        Favourite
      </Button>
    )

}

export default FavouriteButton;