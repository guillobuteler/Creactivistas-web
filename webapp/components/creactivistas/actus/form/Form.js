import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
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
      name: '',
      email: '',
      formErrors: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = fieldType => (event) => {
    const value = event.target.value;
    this.setState(() => (fieldType === 'name' ? { name: value } : { email: value }))
  }
  handleChangeSlider(id, value) {
    this.setState(state => {
      const answers = state.answers;
      answers[id] = value;
      return { answers };
    });
  }
  handleSnackbarClose = () => {
    this.setState(() => ({ formErrors: false }));
  }
  processForm = () => {
    const { answers, name, email } = this.state;
    if (email === '') {
      this.setState(() => ({ formErrors: true }));
    } else {
      this.handleFormComplete(name, email, answers);
    }
  }
  render() {
    const { answers, name, email, formErrors } = this.state;
    const message = 'Para recibir tus resultados, por favor completá tu email.'

    return (
      <div className="Form">
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={formErrors}
          autoHideDuration={7000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarContent
            className="SnackbarErrorContent"
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className="SnackbarMessage">
                <ErrorIcon className="ErrorIcon" />
                {message}
              </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                <CloseIcon className="CloseIcon" />
              </IconButton>,
            ]}
          />
        </Snackbar>
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={9}>
              <Paper className="instructions-paper" style={{marginTop: 35}}>
                Este es un test de personalidad gratuito.
                <br />
                Se deriva del Myers Briggs Type Indicator (MBTI) y busca describir, con pocas variables, las preferencias de una persona.
                <br />
                Como todo test autoadministrable, refleja lo que un individuo cree de sí mismo y esa información es muy valiosa a la hora de empezar un camino de desarrollo personal o profesional.
                <br />
                La mayoría de los test online son pagos o agrupan los tipos psicológicos en “blanco y negro” sin discriminar cuáles son las proporciones de variables que hacen que cada persona sea una combinación única. ZOOM te dice cuánto tenés de cada cosa.
                <br />
                Sin respuesta correcta o incorrecta, cada preferencia es perfecta para distintos tipos de tareas, profesiones, rubros, equipos y hasta etapas de la vida.
                <br />
                Enjoy.
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper className="instructions-paper" style={{marginTop: 15}}>
                Para cada par de frases completá los casilleros del 0 al 5 según la siguiente escala:
              </Paper>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              <Paper className="instructions-paper" style={{marginTop: 15}}>
                <span className="valor-mbti">0</span> = no lo prefiero casi nunca
                <br />
                <span className="valor-mbti">1</span> = pocas veces lo prefiero
                <br />
                <span className="valor-mbti">2-3</span> = a veces prefiero uno y a veces el otro
                <br />
                <span className="valor-mbti">4</span> = tengo una habitual preferencia
                <br />
                <span className="valor-mbti">5</span> = lo prefiero casi siempre
                </Paper>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={9}>
              <Paper className="questions-container">
                <h3 className="questions-title">Prefiero:</h3>
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
                <Container>
                  <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={this.handleChange('name')}
                  />
                </Container>
                <Container className="email-field">
                  <p>Si ingresa su email el sistema le enviará los resultados.</p>
                  <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={this.handleChange('email')}
                  />
                </Container>
                <Container>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.processForm}
                  >
                    Procesar
                  </Button>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <style jsx>
          {`
            .Form {
              background: #ccc;
            }
            .Form .instructions-paper {
              background: #e4e4e0 !important;
              border-radius: 18px !important;
              padding: 20px !important;
              margin-bottom: 10px !important;
              text-align: left !important;
            }
            .Form .instructions-paper .valor-mbti {
              display: inline-block;
              width: 30px;
              color: #ed1c24;
              font-size: 18px;
            }
            .Form .questions-container {
              border: 1px solid #ed1c24;
              border-radius: 3px;
              padding: 18px;
            }
            .Form .questions-container .MuiContainer-root {
              margin-top: 42px;
            }
            .Form .questions-container .questions-title {
              text-align: left !important;
              color: #ed1c24 !important;
              font-weight: 700 !important;
              font-size: 20px !important;
              margin-top: 0px;
            }
            .Form .questions-container .email-field {
              margin-top: 25px;
            }
            .Form .questions-container .email-field .MuiFormControl-marginNormal {
              margin-top: 0px;
            }
            .Form .SnackbarErrorContent {
              background-color: #d32f2f !important;
            }
            .Form .SnackbarErrorContent .SnackbarMessage {
              display: flex;
              align-items: center;
              font-size: 15px;
            }
            .Form .SnackbarErrorContent .ErrorIcon {
              opacity: 0.9;
              margin-right: 11px;
            }
            .Form .SnackbarErrorContent .CloseIcon {
              font-size: 20;
            }
          `}
        </style>
      </div>
    );
  }
}
  
export default Form;
