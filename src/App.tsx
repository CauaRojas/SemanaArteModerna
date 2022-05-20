import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Content from './Content';
import About from './About';

function App() {
	return (
		<div className='App'>
			<header></header>
			<nav>
				<Link to={'/'}>Inicio</Link>
				<Link to={'/about'}>Saiba Mais</Link>
			</nav>

			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
