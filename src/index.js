import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBUO2O8RMVrPRhEYezTFDzy2qRV1795gOQ';

// create component to generate HTML
const App = () => {
	return <div>Hi!</div>;
}

// put generated component HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));