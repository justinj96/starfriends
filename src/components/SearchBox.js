//search through card names

import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa3 ma3'>
			<input 
				className='pa3 ba b--green bg-washed-blue'
				type='search' //important
				placeholder='search characters' 
				onChange={searchChange}
			/> 
		</div>
	);
}

export default SearchBox;