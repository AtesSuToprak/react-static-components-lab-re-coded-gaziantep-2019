import React, { Component } from 'react';
import CatComponent from './CatComponent';
import EinsteinQuoteComponent from './einstein-quote';
import MouseComponent from './MouseComponent';

class App extends React.Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
  			<CatComponent />
  			<EinsteinQuoteComponent />
  			<MouseComponent />
			</div>
		);
	}
}

export default App;
