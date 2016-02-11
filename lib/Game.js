import Grid from './Grid';
import Footer from './Footer';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameState: 'ready'
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({gameState: 'memorize'}, ()=> {
				setTimeout(() => {
					this.setState({gameState: 'recall'});
				}, 2000);
			});
		}, 2000);
	}
	render() {
		return ( 
			<div>
				<Grid {...this.props} gameState={this.state.gameState} />
				<Footer {...this.props} gameState={this.state.gameState} />
			</div>
		);
	}
}

Game.defaultProps = {
	hints:{
		'ready': 'Get Ready...',
		'memorize': 'Memorize!!!',
		'recall': 'Go...'
	}
};