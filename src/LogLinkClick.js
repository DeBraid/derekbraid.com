// LogLinkClick
import ReactGA from 'react-ga';
import K from './AppConstants';

ReactGA.initialize(K.GAID);

const LogLinkClick = ({href}) => {
	const config = {
		category: 'Navigation',
		action: 'Clicked Link',
		href
	}
	ReactGA.event(config);
}

export default LogLinkClick;