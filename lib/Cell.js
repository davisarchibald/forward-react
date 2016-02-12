const Cell = (props) => {
	return (
		<div onClick={props.recordGuess.bind(this, props.id)} className={`cell active-${props.shouldShow} ${props.guessState}`}></div>
	);
};

export default Cell;