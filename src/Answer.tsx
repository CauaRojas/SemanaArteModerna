import parse from 'html-react-parser';
interface answer {
	question: string;
	isRight: boolean;
	questionCount: number;
}

export default function Answer(props: answer) {
	const returnClassName = (isRight: boolean) => {
		const className = isRight ? 'correct' : 'incorrect';
		return 'alternatives ' + className;
	};

	return (
		<>
			<h2 className='question-header'>Questão {props.questionCount}</h2>
			<h3 className='question'>{parse(props.question)}</h3>
			<p className={returnClassName(props.isRight)}>
				{props.isRight ? 'Resposta correta' : 'Resposta incorreta'}
			</p>
		</>
	);
}
