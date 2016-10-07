// LogLinkClick
import ReactGA from 'react-ga';
import K from './AppConstants';

ReactGA.initialize(K.GAID);

const LogLinkClick = ({href}) => {
	const config = {
		category: 'Navigation',
		action: 'Clicked Link',
		label: href
	}
	ReactGA.event(config);
}

export default LogLinkClick;