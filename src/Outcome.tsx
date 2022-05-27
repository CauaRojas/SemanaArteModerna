import { useState } from 'react';
import Answer from './Answer';
interface props {
	answers: boolean[];
}
const questions = (await import('./questions.json')).default.perguntas;
export default function Outcome(props: props) {
    
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
		</>
	);
}
