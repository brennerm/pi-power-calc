import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConsumptionCalculator from './ConsumptionCalculator';
import BatteryCapacityCalculator from './BatteryCapacityCalculator';
import BatteryRuntimeCalculator from './BatteryRuntimeCalculator';
import registerServiceWorker from './registerServiceWorker';
import { Navbar, Nav } from 'react-bootstrap';
import ShareButtons from './ShareButtons';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const basename = "/pi-power-calc"
const apps = {
  "/": {
    "name": "Power Consumption Calculator",
    "component": ConsumptionCalculator
  },
  "/capacity": {
    "name": "Battery Capacity Calculator",
    "component": BatteryCapacityCalculator
  },
  "/runtime": {
    "name": "Battery Runtime Calculator",
    "component": BatteryRuntimeCalculator
  }
}

const App = () => (
  <Router basename={basename}>
    <div>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            {
              Object.keys(apps).map((app_path, _) => (
                <Nav.Link key={app_path} href={basename + app_path}>{apps[app_path].name}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="test">
        {
          Object.keys(apps).map((app_path, _) => (
            <Route key={app_path} exact path={app_path} component={apps[app_path].component} />
          ))
        }
      </div>
      <ShareButtons title={apps["/" + window.location.pathname.split("/").slice(-1).pop()].name} url={window.location.href}></ShareButtons>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
