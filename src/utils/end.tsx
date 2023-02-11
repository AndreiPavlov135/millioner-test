import style from '../styles/page-end.module.scss';

const congratulations = {
	0: 'Извините, но вы ничего не выиграли.',
	100: 'Нам жаль, но у вас минимальный бал.',
	200: 'Ваш выигрыш очень скромный.',
	300: 'Не плохая игра.',
	400: 'Не переживайте, у вас все получиться',
	500: 'Фраза на 500 баллов',
	600: 'Фраза на 600 баллов',
	700: 'Фраза на 700 баллов',
	800: 'Фраза на 800 баллов',
	900: 'Поздравляем, вам не много не хватило да максимального бала.',
	1000: 'Поздравляем, вы очень хороший программист.'
}

function End(props: {totalPoints: number, repeatGame: Function}) {
	const {totalPoints, repeatGame} = props;
	return (
		<div className={style.wrappage}>
            <div>
				<h1>Игра закончена</h1>
				<p>{congratulations[totalPoints as keyof typeof congratulations]}</p>
				<p>Ваш результат <span className={style.win}>{props.totalPoints}</span> баллов</p>
				<button 
					className={style.buttonagain}
					onClick={() => repeatGame()}>Сыграть еще раз</button>
			</div>
		</div>
	);
}
export default End;