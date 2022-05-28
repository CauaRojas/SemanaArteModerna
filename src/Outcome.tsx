import { useState } from 'react';
import { Link } from 'react-router-dom';
import Answer from './Answer';
import { useEffect } from 'react';
interface props {
	answers: boolean[];
}
const questions = (await import('./questions.json')).default.perguntas;
export default function Outcome(props: props) {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<>
			<h1>resultados</h1>
			{questions.map((question, index: number) => (
				<Answer
					key={question.id}
					question={question.pergunta}
					isRight={props.answers[index]}
					questionCount={index + 1}
				/>
			))}
			<Link to={'../'}>Tentar novamente</Link>
		</>
	);
}
