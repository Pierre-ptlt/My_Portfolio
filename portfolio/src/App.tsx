import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
