import Timer from './Timer';

window.CI = ReactDOM.render(
	<div>
		<Timer initialSeconds={1000} />
		<Timer initialSeconds={100} />
	</div>, 
	document.getElementById('react')
);