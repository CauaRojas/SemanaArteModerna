import { useState } from 'react';
import Answer from './Answer';
interface props {
	answers: boolean[];
}

export default function Outcome(props: props) {
	const questions: any = [
		{
			question: 'você é um artista?',
			isRight: true,
		},
		{
			question: 'voce come cocô?',
			isRight: false,
		},
	];

	return (
		<main>
			<h1>resultados</h1>
			{questions.map((question: any, index: number) => (
				<Answer
					question={question.question}
					isRight={question.isRight}
					questionCount={index + 1}
				/>
			))}
		</main>
	);
}