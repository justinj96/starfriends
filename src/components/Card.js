import React from 'react';

const Card = ({name, height, mass, gender, id}) => { //receiving props and destructuring
	return (
		<div className='tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{name}</h2>
				<p>Height: {height}</p>
				<p>Mass: {mass}</p>
				<p>Gender: {gender}</p>
			</div>
		</div>
	);
}

export default Card;