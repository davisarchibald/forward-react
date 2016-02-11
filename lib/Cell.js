const Cell = (props) => {
	let active = props.randomCells.indexOf(props.id) >= 0 && props.gameState === 'memorize';
	return (
		<div className={`cell active-${active}`}></div>
	);
};

export default Cell;