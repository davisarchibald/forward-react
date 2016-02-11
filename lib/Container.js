import Game from './Game';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return ( 
			<div>
				<Game rows={5} columns={5} activeCellCount={6}/>
			</div>
		);
	}
}