import Row from './Row';
import Cell from './Cell';
import _ from 'lodash';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.prepareMatrix();
	}
	prepareMatrix() {
		let rows = this.props.rows;
		let columns = this.props.columns;
		this.matrix = [];
		for(let r = 0; r < this.props.rows; r++) {
			let row = [];
			for(let c = 0; c < this.props.columns; c++) {
				row.push(`${r}${c}`);
			}
			this.matrix.push(row);
		}
		let flatMatrix = _.flatten(this.matrix);
		this.randomCells = _.sampleSize(flatMatrix, this.props.activeCellCount);
	}
	recordGuess(cellId){
		if (this.props.gameState === 'recall') {
			this.props.recordGuessResult(this.cellIsActive(cellId), cellId);	
		}
	}
	guessState(cellId) {
		if(this.props.wrongGuesses.indexOf(cellId) >= 0) {
			return 'wrong';
		}
		if (this.props.correctGuesses.indexOf(cellId) >= 0) {
			return 'correct';
		}
	}
	cellIsActive(cellId) {
		return this.randomCells.indexOf(cellId) >= 0;
	}
	render() {
		return ( 
			<div>
				{ this.matrix.map((cells, index)=> {
					return (
						<Row key={index}>
							{cells.map(cellId=>{
								return <Cell 
											key={cellId} 
											id={cellId} 
											gameState={this.props.gameState} 
											recordGuess={this.recordGuess.bind(this)}
											guessState={this.guessState(cellId)}
											shouldShow={this.cellIsActive(cellId) && this.props.gameState === 'memorize'}
											//recordGuessResult={this.props.recordGuessResult}
										/>;
							})}
						</Row>
					);
				}) }
			</div>
		);
	}
}