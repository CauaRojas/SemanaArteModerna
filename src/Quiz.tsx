import { Link, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Outcome from './Outcome';
import parse, { Element } from 'html-react-parser';

const questions = (await import('./questions.json')).default.perguntas;
interface question {
	id: number;
	question: string;
	options: string[];
	answer: number;
	questionNumber: number;
	answersArray: boolean[];
}

const answers: boolean[] = new Array(questions.length).fill(false);
export default function Quiz() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Questions />} />
				<Route
					path='/answers'
					element={<Outcome answers={answers} />}></Route>
			</Routes>
		</main>
	);
}
function Questions() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<>
			{questions.map((question, index) => (
				<Question
					id={question.id}
					question={question.pergunta}
					options={question.opcoes}
					answer={question.certa}
					key={question.pergunta}
					questionNumber={index}
					answersArray={answers}
				/>
			))}
			<Link to='./answers'>
				<button>Enviar</button>
			</Link>
		</>
	);
}

function Question(props: question) {
	const indexToAlternative = (index: number) => {
		return String.fromCharCode(65 + index);
	};
	const rightAnswer = indexToAlternative(props.answer);
	let isAnswerRight = false;
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		isAnswerRight = event.target.value === rightAnswer;
		props.answersArray[props.questionNumber] = isAnswerRight;
		console.log(props.answersArray);
	};

	return (
		<div className='question'>
			<h2 className='question-header'>
				Questão {props.questionNumber + 1}
			</h2>
			<h3 className='question'>{parse(props.question)}</h3>
			<ul className='alternatives'>
				{props.options.map((option, index) => (
					<li key={index}>
						<input
							type='radio'
							name={'question' + props.id}
							id={props.question + index}
							value={indexToAlternative(index)}
							onChange={handleInputChange}
						/>
						<label htmlFor={props.question + index}>{option}</label>
					</li>
				))}
			</ul>
		</div>
	);
}
