import Grid from './Grid';
import Footer from './Footer';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return ( 
			<div>
				<Grid rows={5} columns={5} />
				<Footer />
			</div>
		);
	}
}