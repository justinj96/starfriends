//main components of App

import React, { Component } from 'react'; //always imported
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Urls from '../components/Characters';

//state, description of app. Robots and input to search box
//props are simply things that come out of state
//parent feeds state into child component
//child component turns state to prop

//mounting, loading page mounts app.js
	
class App extends Component { //app component with 2 states
	constructor() { //any component that has state can use
		super()
		this.state = { //what changes, 2 components
			characters: [], 
			searchfield: ''
		}
	}

	componentDidMount() { //request
		let charArray = [];
		Urls.map(url => {
			return (
			  fetch(url).then(response => response.json())
				.then(result => charArray.push(result))
				.then(persons => {this.setState({ characters: charArray })})
			);
		});

	}

	onSearchChange = (event) => { //variable name, parameter
		//everytime the search changes, sends event
		//console.log(event.target.value); //remember this 
		this.setState({ searchfield: event.target.value }) //changing state 
		//setState is a built in function
	}

	render() { //always needed
		// variable set equal to, get state of robots and filter
		const { characters, searchfield } = this.state; //destructuring
		let filteredCharacters = characters.filter(person => { 
			return person.name.toLowerCase().includes(searchfield.toLowerCase()) 
			|| person.height.toLowerCase().includes(searchfield.toLowerCase())
			|| person.mass.toLowerCase().includes(searchfield.toLowerCase())
			|| person.gender.toLowerCase().startsWith(searchfield.toLowerCase());
		})
			return !characters.length ?
			<h1 className='tc'>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='title mb1 yellow'>Star Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<ErrorBoundry>
							<CardList characters={filteredCharacters} /> 
						</ErrorBoundry>
					</Scroll>
				</div> //passing robots^
			);
		}
	}	

export default App;