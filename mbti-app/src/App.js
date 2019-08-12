import React from 'react';
import { BrowserRouter as Router, Switch,/* Link,*/ Route } from "react-router-dom";

import Container from '@material-ui/core/Container';

import FormView from './views/FormView';
import ChartsBlindShotView from './views/ChartsBlindShotView';
import ChartsView from './views/ChartsView';
import NotFoundView from './views/NotFoundView';

import './App.css';
import header_logo from './assets/header_zoom.jpg';


function App() {
  const basePath = '/mbti';
  return (
    <div className="App">
      <Container className="ZOOM-Container">
        <header>
          <img src={header_logo} alt="ZOOM" className="ZOOM-Logo" />
        </header>
        <Router>
          {/* <nav>
            <Link to="/">Home</Link>
          </nav> */}
          <section className="ZOOM-Views">
            <Switch>
              <Route exact path={`${basePath}/`} component={FormView} />
              <Route exact path={`${basePath}/chart`} component={ChartsBlindShotView} />
              <Route exact path={`${basePath}/charts/:totals`} component={ChartsView} />
              <Route component={NotFoundView} />
            </Switch>
          </section>
        </Router>
      </Container>
    </div>
  );
}

export default App;
