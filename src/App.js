import React from 'react';
import './App.css';
import { Upload } from './components/Upload';
import { Header } from './components/Header';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Upload />
		</div>
	);
};

export default App;
