const Cell = (props) => {
	let active = props.randomCells.indexOf(props.id) >= 0 && props.gameState === 'memorize';
	return (
		<div onClick={props.recordGuess.bind(this, props.id)} className={`cell active-${active} ${props.guessState}`}></div>
	);
};

export default Cell;