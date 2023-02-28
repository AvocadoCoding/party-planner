import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect} from 'react';
import search from "../utils/API";
// import FavouriteButton from "../FavouriteButton";
import "./style.css";

function CocktailCards({drink, drinkStorage, setDrinkStorage}) {

  
  // useState to capture returned API response
  const [modalAPI, setModalAPI]= useState([]);
 
  // useState and functions for modal window appearance
  const [show, setShow] = useState(false);

  // useState for favourite button colour change
  const [colour, setColour] = useState("");

  

  const handleClose = () => setShow(false);
  
  // Need to add API call in this part
  const handleShow = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    search.searchID(e.target.value)
    .then(drinks=>setModalAPI(drinks.data.drinks))
    .catch(err=>console.log(err));
    setShow(true);
  }
  console.log(modalAPI);

  // console.log(typeof drinkStorage);
    // console.log(drinkStorage);
    
  

  

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
            key: response.data.drinks[0].idDrink,
            name: response.data.drinks[0].strDrink,
            image: response.data.drinks[0].strDrinkThumb,
            /* instructions: response.data.drinks[0].strInstructions,
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
            measure15: response.data.drinks[0].strMeasure15, */
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

    useEffect(() => {
             // search to see if id is present in drinks storage array and toggle favourite button
        // colour accordingly
        const btnIdSearch = drink.idDrink;
        const indexBtn = drinkStorage.findIndex(
          (element) => element.id === btnIdSearch
        );
        if (indexBtn === -1) {
          setColour("white");
        } else {
          setColour("pink");
        }
        }, [drinkStorage, drink.idDrink]);


 
  return (
    // Cards put inside column of width 3--> want xs={6}, s= 3
    <Card style={{ width: '18rem', margin: '10px', borderColor: 'black'}}>
      <Card.Img variant="top" src={drink.strDrinkThumb}/>
      <Card.Body style={{backgroundColor: '#49C2BC'}}>
        <div className='title'>
        <Card.Title>{drink.strDrink}</Card.Title>
        </div>
      
      {/* Modal button and modal content */}
        <div className="buttonContainer">
        <Button value={drink.idDrink} onClick={(e) => handleShow(e)} 
        style={{ color: 'black', backgroundColor: '#FA7B55', borderColor: 'black'}}
        >
        Ingredients and Instructions
      </Button>
      </div>


      {/* Favourite button */}
      <div className="buttonContainer">
      {<Button 
        value={drink.idDrink}
        onClick={(e) => handleFavourite(e)}
        style={{ color: 'black', backgroundColor: colour, 
        borderColor: 'black'}}
        >
        Favourite
      </Button>}
      
      {/* <FavouriteButton 
        value={drink.drink.idDrink}
        drinkStorage={drinkStorage}
        setDrinkStorage={setDrinkStorage}
        /> */}
      </div>

    {modalAPI.map((drinkID)=>(
      <Modal show={show} onHide={handleClose} key={drinkID.idDrink}>
        <Modal.Header closeButton>
          <Modal.Title>{drinkID.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Instructions</h3>
          <p>{drinkID.strInstructions}</p>
          <h3>Ingredients</h3>
          <ul>
            <li>{drinkID.strIngredient1} {drinkID.strMeasure1}</li>
            <li>{drinkID.strIngredient2} {drinkID.strMeasure2}</li>
            <li>{drinkID.strIngredient3} {drinkID.strMeasure3}</li>
            <li>{drinkID.strIngredient4} {drinkID.strMeasure4}</li>
          </ul>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       ))} 
      </Card.Body>
    </Card>
  );
}

export default CocktailCards;
