import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';

function FavouriteButton(props){
    
    return(
    <Button 
        value={props.value}
        style={{ color: 'black', backgroundColor: '#FA7B55', border: 'black'}}
        >
        Favourite
      </Button>
    )

}

export default FavouriteButton;