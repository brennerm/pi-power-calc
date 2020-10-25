import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConsumptionCalculator from './ConsumptionCalculator';
import BatteryCapacityCalculator from './BatteryCapacityCalculator';
import BatteryRuntimeCalculator from './BatteryRuntimeCalculator';
import registerServiceWorker from './registerServiceWorker';
import { Navbar, Nav} from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router basename="/pi-power-calc">
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            <Nav.Link href="/pi-power-calc/">Power Consumption Calculator</Nav.Link>
            <Nav.Link href="/pi-power-calc/capacity">Battery Capacity Calculator</Nav.Link>
            <Nav.Link href="/pi-power-calc/runtime">Battery Runtime Calculator</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Route exact path="/" component={ConsumptionCalculator} />
        <Route path="/capacity" component={BatteryCapacityCalculator} />
        <Route path="/runtime" component={BatteryRuntimeCalculator} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
