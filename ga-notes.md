<OutboundLink> Component
Outbound links can directly be used as a component in your React code and the event label will be sent directly to ReactGA.

Example
var ReactGA = require('react-ga');
 
render() {
  return (
    <div>
      <ReactGA.OutboundLink
        eventLabel="myLabel"
        to="http://www.example.com"
        target="_blank">
        My Link
      </ReactGA.OutboundLink>
    </div>
  );
}

From: https://github.com/react-ga/react-ga/issues/31
import React, {PropTypes} from 'react';
import ga from 'react-ga';

class App extends React.Component{
    constructor(props){
        super(props);
        ga.initialize(config.googleAnalyticsId);
    }

    ga(pathname=null) {
        ga.pageview(pathname || this.props.location.pathname)
    }

    /* Sending Google Analytics metrics during page load */
    componentDidMount() {
        this.ga()
    }

    /* Sending Google Analytics metrics when pathname changes, when visiting another page */
    componentWillReceiveProps(nextProps){
        if (nextProps.location.pathname !== this.props.location.pathname )
            this.ga(nextProps.location.pathname)
    }
}