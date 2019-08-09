import React, { useState } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Form from './components/Form';
import FormResults from './components/FormResults';

import './App.css';
import header_logo from './assets/header_zoom.jpg';


function App() {
  const sendEmail = (name, email, answers) => {
    const data = {
      name,
      email,
      answers,
    }
    axios.post(`http://www.actus.com.ar/mbti/php/handler.php`, data, {
      transformRequest: [(data) => (JSON.stringify(data))],
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  const [formData, setFormData] = useState(null);
  const handleFormComplete = (name, email, answers) => {
    setFormData({
      name,
      answers
    });
    sendEmail(name, email, answers);
  };
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
