import timerStyle from "../styles/timer.module.scss";
interface INumbers {
	numb: number;
}
function TimeProgress({ numb }: INumbers) {
	return (
		<div className={timerStyle.timerProgress}>
			{Array(numb)
				.fill(0)
				.map((x, i) => (
					<div key={i} className={timerStyle.timerItem}></div>
				))}
		</div>
	);
}
export default TimeProgress;
