import React from 'react';
import ReactDOM from 'react-dom';

// create component to generate HTML
const App = () => {
	return <div>Hi!</div>;
}

// put generated component HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));