const questions = (await import('./questions.json')).default.perguntas;
interface question {
	question: string;
	options: string[];
	answer: number;
	questionNumber: number;
	answersArray: boolean[];
}

export default function Quiz() {
	const answers: boolean[] = new Array(questions.length).fill(false);
	return (
		<main>
			{questions.map((question, index) => (
				<Question
					question={question.pergunta}
					options={question.opcoes}
					answer={question.certa}
					key={question.pergunta}
					questionNumber={index}
					answersArray={answers}
				/>
			))}
		</main>
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
			<h2>{props.question}</h2>
			<ul>
				{props.options.map((option, index) => (
					<li key={index}>
						<input
							type='radio'
							name='question'
							value={indexToAlternative(index)}
							onChange={handleInputChange}
						/>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
}
