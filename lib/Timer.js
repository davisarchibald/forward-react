export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			remainingSeconds: this.props.initialSeconds
		};
	}
	componentDidMount() {
		setInterval(()=> {
			this.setState({remainingSeconds: this.state.remainingSeconds - 1});
		}, 1000);
	}
	render() {
		return ( 
			<div>{this.state.remainingSeconds}</div>
		);
	}
}