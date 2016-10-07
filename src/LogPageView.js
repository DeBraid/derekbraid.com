// LogPageView
import ReactGA from 'react-ga';
import K from './AppConstants';

ReactGA.initialize(K.GAID);

const LogPageView = () => {
	const page = window.location.pathname;
	ReactGA.set({ page: page });
	ReactGA.pageview(page);
}

export default LogPageView;