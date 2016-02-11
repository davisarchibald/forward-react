import Row from './Row';
import Cell from './Cell';

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
		console.log(this.matrix);
	}
	render() {
		return ( 
			<div>
				{ this.matrix.map(cells=> {
					return (
						<Row>
							{cells.map(cellId=>{
								return <Cell/>;
							})}
							<Cell/>
							
						</Row>
					);
				}) }
			</div>
		);
	}
}