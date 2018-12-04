import React from 'react';
import Card from './Card.js';

//Receives robots from App.js
const CardList = ({ characters }) => { //robots is prop
	return (
		<div>
			{
			characters.map((person, i) => {
				return ( //creates each card by iterating robots.js
					<Card //call Card.js for formatting
						key={i}
						id={i}
						name={characters[i].name} 
						height={characters[i].height} 
						mass={characters[i].mass}
						gender={characters[i].gender}
					/>
					);
				})
			}
		</div>
	);
}

export default CardList;