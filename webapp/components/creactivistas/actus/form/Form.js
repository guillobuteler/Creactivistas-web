import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import FormQuestionGroup from './FormQuestionGroup';
import { questions, answersInit } from '../constants'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.handleFormComplete = props.onComplete;
    this.state = {
      answers: answersInit,
      clientName: '',
      clientEmail: '',
      formValidation: {
        emailValidationErr: false,
        showSnackbar: false,
      },
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = fieldType => (event) => {
    const value = event.target.value;
    this.setState(() => (fieldType === 'clientName' ? { clientName: value } : { clientEmail: value }))
  }
  handleChangeSlider(id, value) {
    this.setState(state => {
      const answers = state.answers;
      answers[id] = value;
      return { answers };
    });
  }
  handleSnackbarClose = () => {
    this.setState(() => ({ formValidation: { showSnackbar: false } }));
  }
  processForm = () => {
    const { answers, clientName, clientEmail } = this.state;
    if (clientName === '' || clientEmail === '') {
      this.setState(() => ({ formValidation: { showSnackbar: true } }));
    } else {
      if (!this.isValidEmail(clientEmail)) {
        this.setState(() => ({ formValidation: { emailValidationErr: true } }));
      } else {
        this.handleFormComplete(clientName, clientEmail, answers);
      }
    }
  }
  isValidEmail (email) {
    return /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i.test(email)
  }
  render() {
    const { answers, clientName, clientEmail, formValidation: { emailValidationErr, showSnackbar } } = this.state;
    const message = 'Para recibir tus resultados, completá tu nombre y email.'

    return (
      <div className="Form">
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={showSnackbar}
          autoHideDuration={7000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            style={{ backgroundColor: '#d32f2f' }}
            message={
              <span id="client-snackbar" style={{ 
                display: 'flex',
                alignItems: 'center',
                fontSize: 15
              }}>
                <ErrorIcon className="ErrorIcon" style={{ opacity: '0.9', marginRight: 11 }} />
                {message}
              </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                <CloseIcon style={{ fontSize: 20 }}/>
              </IconButton>,
            ]}
          />
        </Snackbar>
        <div>
          <Paper style={{
            backgroundColor: '#edf3f6',
            marginTop: 35,
            marginBottom: 10,
            borderRadius: 3,
            padding: '18px 20px',
            textAlign: 'left'
          }}>
            Este es un test de personalidad gratuito que se deriva del Myers Briggs Type Indicator (MBTI) y busca describir, con pocas variables, las preferencias de una persona.<br />
            Como todo test autoadministrable, refleja lo que un individuo cree de sí mismo y esa información es muy valiosa a la hora de empezar un camino de desarrollo personal o profesional.<br />
            La mayoría de los test online son pagos o agrupan los tipos psicológicos en “blanco y negro” sin discriminar cuáles son las proporciones de variables que hacen que cada persona sea una combinación única. ZOOM te dice cuánto tenés de cada cosa.<br />
            Sin respuesta correcta o incorrecta, cada preferencia es perfecta para distintos tipos de tareas, profesiones, rubros, equipos y hasta etapas de la vida.<br />
            Enjoy.
          </Paper>
          <Paper style={{
            backgroundColor: '#edf3f6',
            width: '61%',
            margin: '15px auto 10px auto',
            borderRadius: 3,
            padding: '12px 20px',
            textAlign: 'left'
          }}>
            Para cada par de frases completá los casilleros del 0 al 5 según la siguiente escala:
          </Paper>
          <Paper style={{
            backgroundColor: '#edf3f6',
            width: '33%',
            margin: '15px auto 10px auto',
            borderRadius: 3,
            padding: '16px 20px',
            textAlign: 'left'
          }}>
            <span className="valor-mbti">0</span> = no lo prefiero casi nunca<br />
            <span className="valor-mbti">1</span> = pocas veces lo prefiero<br />
            <span className="valor-mbti">2-3</span> = a veces prefiero uno y a veces el otro<br />
            <span className="valor-mbti">4</span> = tengo una habitual preferencia<br />
            <span className="valor-mbti">5</span> = lo prefiero casi siempre
          </Paper>
        </div>
        <div>
          <Paper style={{ 
            border: '1px solid #ed1c24',
            borderRadius: 3,
            padding: 18,
            marginTop: 42,
            marginBottom: 42
          }}>
            <h3 style={{ 
            textAlign: 'left',
            color: '#ed1c24',
            fontWeight: 700,
            fontSize: 20,
            marginTop: 0,
          }}>Prefiero:</h3>
            {
              questions.map((questionGroup, i)=> (
                <FormQuestionGroup
                  key={i}
                  questionGroup={questionGroup}
                  handleChange={this.handleChangeSlider}
                  answers={answers}
                />
              ))
            }
            <div style={{ 
              marginTop: 62,
              marginBottom: 42
            }}>
              <p>Por favor ingres&aacute; tu nombre y direcci&oacute;n de correo para poder recibir los resultados v&iacute;a email.</p>
              <div style={{ 
                marginBottom: 12
              }}>
                <TextField
                  id="clientName"
                  label="Nombre"
                  value={clientName}
                  onChange={this.handleChange('clientName')}
                  required
                />
              </div>
              <div style={{ 
                marginBottom: 24
              }}>
                <TextField
                  id="clientEmail"
                  label="Email"
                  value={clientEmail}
                  onChange={this.handleChange('clientEmail')}
                  style={{ 
                    marginTop: 0
                  }}
                  required
                  error={emailValidationErr}
                />
                <p style={emailValidationErr ? { color: 'red', margin: '5px 0 0' } : { display: 'none' }}>La direcci&oacute;n de correo debe ser v&aacute;lida.</p>
              </div>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.processForm}
                >
                  Procesar
                </Button>
              </div>
            </div>
          </Paper>
        </div>
        <style jsx>
          {`
            .valor-mbti {
              display: inline-block;
              width: 30px;
              color: #ed1c24;
              font-size: 18px;
            }
          `}
        </style>
      </div>
    );
  }
}
  
export default Form;
