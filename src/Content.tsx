interface props {
	logo: string;
	museu: string;
	artes: string;
}

export default function Content({ logo, museu, artes }: props) {
	return (
		<main>
			<h1>Semana da Arte Moderna</h1>
			<img src={logo} alt='Logo da Semana Da Arte Moderna' />
			<article>
				<h2>O que é a Semana da Arte moderna</h2>
				<p>
					O evento foi a expressão da ruptura com o passado, da
					renovação de linguagem, da busca pela experimentação e da
					liberdade de criação. A Semana da Arte Moderna foi uma
					manifestação artístico-cultural que ocorreu no Teatro
					Municipal de São Paulo entre os dias 13 e 18 de fevereiro de
					1922. Lá ocorreram apresentações de dança, música, recital
					de poesias, exposição de pinturas e esculturas e palestras.
					Os artistas que participavam tinham uma nova visão do que
					representava arte, foram fortemente influenciados pelas
					vanguardas europeias. Seu objetivo era uma renovação social
					e artística no país.
				</p>
				<img src={museu} alt='Museu onde ocorreu esse evento' />
			</article>
			<article>
				<h2>Qual foi sua importância?</h2>
				<p>
					A arte sempre tinha sido vista como algo fundamentado,
					pode-se notar que grande parte dos movimentos anteriores
					eram dotados de realismo, onde numa tela tela buscava-se
					expor paisagens, pessoas, animais, objetos, etc, da forma
					mais semelhante possível. As vanguardas europeias surgiram
					como uma forma de ir contra isso, onde surgiram os
					movimentos: futurismo, surrealismo, cubismo, expressionismo
					e dadaísmo. A vanguarda representa a parte frontal de um
					exército, esse movimento vinha como uma forma de combater o
					sistema artístico da época, indo contra a opinião geral do
					povo, as vanguardas europeias, então, vem como os
					precursores do que seria reconhecido posteriormente por
					diversos países diferentes.
				</p>
				<img src={artes} alt='Artes que ocorreram na Semana' />
			</article>
			<article>
				<h2>Importância histórica</h2>
				<p>
					A Semana da Arte Moderna vem ganhando sua importância com o
					passar dos anos, ela é uma forma vista pelo brasileiro de
					fazer a sua arte, porém, reproduzindo os padrões europeus,
					assim, dando início à construção de uma cultura
					essencialmente nacional.
				</p>
			</article>
			<section>
				<h2>Características</h2>
				<ul>
					<li>Ausência de formalismo</li>
					<li>Ruptura com academicismo e tradicionalismo</li>
					<li>Crítica ao modelo parnasiano</li>
					<li>
						Influência das vanguardas artísticas europeias
						(futurismo, cubismo, dadaísmo, surrealismo,
						expressionismo)
					</li>
					<li>Valorização da identidade e cultura brasileira</li>
					<li>
						Fusão de influências externas aos elementos brasileiros
					</li>
					<li>Experimentações estéticas</li>
					<li>Liberdade de expressão</li>
					<li>
						Aproximação da linguagem oral, com utilização da
						linguagem coloquial e vulgar
					</li>
					<li>Temáticas nacionalistas e cotidianas</li>
				</ul>
			</section>
		</main>
	);
}
