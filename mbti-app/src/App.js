import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Form from './components/Form';
import FormResults from './components/FormResults';

import './App.css';
import header_logo from './assets/header_zoom.jpg';


function App() {
  const [formData, setFormData] = useState(null);
  const handleFormComplete = (name, answers) => {
    setFormData({
      name,
      answers
    });
  }
  return (
    <div className="App">
      <Container className="ZOOM-Container">
        <header>
          <img src={header_logo} alt="ZOOM" className="ZOOM-Logo" />
        </header>
        <section className="ZOOM-Form">
          { !formData ? <Form onComplete={handleFormComplete} /> :
            <FormResults data={formData} />
          }
        </section>
      </Container>
    </div>
  );
}

export default App;
