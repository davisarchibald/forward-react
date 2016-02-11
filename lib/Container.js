import Timer from './Timer';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timers: [50, 100],
			inputValue: ''
		};
	}
	addTimer() {
		let timers = this.state.timers;
		timers.push(this.state.inputValue);
		this.setState({
			timers,
			inputValue: ''
		})
	}
	updateInput(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	render() {
		return ( 
			<div>
				<input type="text" value={this.state.inputValue} onChange={this.updateInput.bind(this)}/>
				<button onClick={this.addTimer.bind(this)}>Add</button>
				{
					this.state.timers.map(timer => {
						return <Timer initialSeconds={timer} />;
					})
				}
			</div>
		);
	}
}