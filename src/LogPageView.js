// LogPageView
import ReactGA from 'react-ga';

ReactGA.initialize('UA-85048582');

const LogPageView = () => {
	const page = window.location.pathname;
	ReactGA.set({ page: page });
	ReactGA.pageview(page);
}

export default LogPageView;