import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Content from './Content';
import About from './About';
import logo from './semana.png';
import Quiz from './Quiz';

function App() {
	return (
		<div className='App'>
			<header>
				<img src={logo} alt='Semana Da Arte Moderna' />
			</header>
			<nav>
				<Link to={'/'}>Inicio</Link>
				<Link to={'/about'}>Saiba Mais</Link>
				<Link to={'./quiz'}>Responda o Quiz</Link>
			</nav>

			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/about' element={<About />} />
				<Route path='/quiz' element={<Quiz />} />
			</Routes>
		</div>
	);
}

export default App;
