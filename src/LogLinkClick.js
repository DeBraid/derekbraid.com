// LogLinkClick
import ReactGA from 'react-ga';

ReactGA.initialize('UA-85048582');

const LogLinkClick = ({href}) => {
	const config = {
		category: 'Navigation',
		action: 'Clicked Link',
		href
	}
	ReactGA.event(config);
}

export default LogLinkClick;