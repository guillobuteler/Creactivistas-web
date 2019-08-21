import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form/Form';
import FormResults from '../components/Form/FormResults';

const FormView = () => {
  const sendEmail = (name, email, answers) => {
    const hostname = window.location.hostname;
    const data = {
      name,
      email,
      answers,
      dev: process.env.NODE_ENV === 'development' || hostname === 'www.enneagonstudios.com',
    }
    axios.post(`http://${hostname}/mbti/php/handler.php`, data, {
      transformRequest: [(data) => (JSON.stringify(data))],
    })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
      });
  };
  const [ formData, setFormData ] = useState(null);
  const handleFormComplete = (name, email, answers) => {
    setFormData({
        name,
        answers
    });
    sendEmail(name, email, answers);
  };

  return !formData ? <Form onComplete={handleFormComplete} /> : <FormResults data={formData} />
}

export default FormView;
