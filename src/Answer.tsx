import parse from 'html-react-parser';
interface answer{
    question: string;
    isRight: boolean;
    questionCount: number;
}

export default function Answer(props: answer) {
    return(
        <>
            <h3>Questão {props.questionCount}</h3>
            <strong>{parse(props.question)}</strong>
            <p>{props.isRight ? "Resposta correta" : "Resposta incorreta"}</p>
        </>
    );
}