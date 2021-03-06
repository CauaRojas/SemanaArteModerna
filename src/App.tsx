import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './Content';
import About from './About';
import logo from './img/semana.png';
import Quiz from './Quiz';
import Outcome from './Outcome';
import LogosSemana from './img/LogoSemana.jpeg';
import artesSemana from './img/artesSemana.jpeg';
import museuSemana from './img/museuSemana.jpeg';
function App() {
	return (
		<div className='App'>
			<header>
				<img src={logo} alt='Semana Da Arte Moderna' />
			</header>
			<nav>
				<Link to={'/'}>Inicio</Link>
				<Link to={'/about'}>Saiba Mais</Link>
				<Link to={'/quiz'}>Responda o Quiz</Link>
			</nav>

			<Routes>
				<Route
					path='/'
					element={
						<Content
							logo={LogosSemana}
							artes={artesSemana}
							museu={museuSemana}
						/>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/quiz/*' element={<Quiz />} />
			</Routes>
		</div>
	);
}

export default App;
