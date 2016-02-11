export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			remainingSeconds: this.props.initialSeconds
		};
	}
	stopTimer(){
		clearInterval(this.timerId);
	}
	componentDidMount() {
		this.timerId = setInterval(()=> {
			this.setState({
				remainingSeconds: this.state.remainingSeconds - 1
			});
		}, 1000);
	}
	render() {
		return ( 
			<div onClick={this.stopTimer.bind(this)}>{this.state.remainingSeconds}</div>
		);
	}
}