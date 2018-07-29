import React, { Component } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			location: [
				{
					id: 0,
					title: 'New York',
					selected: false,
					key: 'location'
				},
				{
					id: 1,
					title: 'Dublin',
					selected: false,
					key: 'location'
				},
				{
					id: 2,
					title: 'California',
					selected: false,
					key: 'location'
				},
				{
					id: 3,
					title: 'Istanbul',
					selected: false,
					key: 'location'
				},
				{
					id: 4,
					title: 'Izmir',
					selected: false,
					key: 'location'
				},
				{
					id: 5,
					title: 'Oslo',
					selected: false,
					key: 'location'
				}
			]
		};
	}

	toggleSelected = (id, key) => {
		let temp = this.state[key];
		temp[id].selected = !temp[id].selected;
		this.setState({
			[key]: temp
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">product-dropdown</h1>
				</header>
				<main>
					<Dropdown
						titleHelper="Location"
						title="Select location"
						list={this.state.location}
						toggleItem={this.toggleSelected}
					/>
				</main>
			</div>
		);
	}
}

export default App;
