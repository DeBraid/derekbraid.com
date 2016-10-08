## Hello World

I finally got around to buying derekbraid.com and putting a site up!  I have put up some links to my work and will slowly expand it.

Please send feedback to me on twitter [@Royal_Arse](http://twitter.com/Royal_Arse).

## Tech
A `React` component for tracking links with google analytics:

the `fn`:

```
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
```
and the core `component`:
```
import React, { Component } from 'react';
import LogLinkClick from './LogLinkClick';

class TrackedLink extends Component {
  handleClick(event){
    LogLinkClick(event.target);
  }
  render() {
    let { href, text } = this.props;
    return (
      <a href={href} onClick={this.handleClick}>
        {text}
      </a>
    );
  }
}

export default TrackedLink;
```


Using react, via the amazing cli tool create-react-app, see [boilerplate readme](https://github.com/DeBraid/derekbraid.com/blob/master/CRA-README.md).

This site uses google anayltics via `react-ga` found [here](https://www.npmjs.com/package/react-ga).  A cool npm package for tracking views and events on your site.

