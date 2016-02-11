import Timer from './Timer';

window.CI = ReactDOM.render(
	<Timer initialSeconds={100} />, 
	document.getElementById('react')
);