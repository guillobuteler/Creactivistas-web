import React from 'react';
// import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Form from './components/Form';

import './App.css';
import header_logo from './assets/header_zoom.jpg';

function App() {
  return (
    <div className="App">
      <Container className="ZOOM-Container">
        <header>
          <img src={header_logo} alt="ZOOM" className="ZOOM-Logo" />
        </header>
        <section className="ZOOM-Form">
          <Form />
        </section>
      </Container>
    </div>
  );
}

export default App;
