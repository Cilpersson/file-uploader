import React from 'react';
import './App.css';
import { Upload } from './components/Upload';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Upload />
			</div>
			<Footer />
		</div>
	);
};

export default App;
