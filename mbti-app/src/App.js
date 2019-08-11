import React from 'react';
import { BrowserRouter as Router,/* Link,*/ Route } from "react-router-dom";

import Container from '@material-ui/core/Container';

import FormView from './views/FormView';
import ChartsBlindShotView from './views/ChartsBlindShotView';
import ChartsView from './views/ChartsView';

import './App.css';
import header_logo from './assets/header_zoom.jpg';


function App() {
  
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
            <Route exact path="/" component={FormView} />
            <Route exact path="/chart" component={ChartsBlindShotView} />
            <Route path="/charts/:totals" component={ChartsView} />
          </section>
        </Router>
      </Container>
    </div>
  );
}

export default App;
