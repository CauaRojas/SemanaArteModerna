interface answer{
    question: string;
    isRight: boolean;
    questionCount: number;
}

export default function Answer(props: answer) {
    return(
        <main>
            <h3>Questão {props.questionCount}</h3>
            <strong>{props.question}</strong>
            <p>{props.isRight ? "Resposta correta" : "Resposta incorreta"}</p>
        </main>
    );
}