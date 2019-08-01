import React from 'react';
// import fromJS from 'immutable';
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
import './Form.css';


const questions = [
  [
    { id: '1a', label: 'Tomar decisiones después de conocer qué piensan los demás' },
    { id: '1b', label: 'Tomar decisiones sin consultar a otros' },
  ],
  [
    { id: '2a', label: 'Ser identificado como imaginativo o intuitivo' },
    { id: '2b', label: 'Ser identificado como concreto y preciso' },
  ],
  [
    { id: '3a', label: 'Tomar decisiones sobre las personas basándome en datos disponibles y un análisis sistemático de las situaciones' },
    { id: '3b', label: 'Tomar decisiones sobre las personas basándome en la empatía, emociones y entendimiento de sus necesidades y valores' },
  ],
  [
    { id: '4a', label: 'Permitir que los compromisos ocurran sólo si los otros quieren asumirlos' },
    { id: '4b', label: 'Presionar para asegurarme de que los compromisos sean cumplidos' },
  ],
  [
    { id: '5a', label: 'Tener tiempo para reflexionar y estar tranquilo y en silencio solo' },
    { id: '5b', label: 'Tener tiempo para estar activo y enérgico con otros' },
  ],
  [
    { id: '6a', label: 'Usar métodos que conozco bien y son efectivos para cumplir con mi trabajo' },
    { id: '6b', label: 'Pensar en nuevos métodos para hacer las tareas' },
  ],
  [
    { id: '7a', label: 'Llegar a conclusiones basándome en un análisis lógico, racional y metódico' },
    { id: '7b', label: 'Llegar a conclusiones basándome en lo que siento y creo desde la experiencia acerca de la vida y las personas' },
  ],
  [
    { id: '8a', label: 'Evitar comprometerme con fechas límite (deadlines)' },
    { id: '8b', label: 'Armar un esquema de trabajo y seguirlo' },
  ],
  [
    { id: '9a', label: 'Los pensamientos y emociones que otros no pueden ver' },
    { id: '9b', label: 'Actividades y ocurrencias en las cuales otros participan' },
  ],
  [
    { id: '10a', label: 'Lo abstracto y teórico' },
    { id: '10b', label: 'Lo concreto y real' },
  ],
  [
    { id: '11a', label: 'Ayudar a otros a explorar sus emociones' },
    { id: '11b', label: 'Ayudar a otros a tomar decisiones lógicas' },
  ],
  [
    { id: '12a', label: 'Comunicar muy poco de mis pensamientos y emociones' },
    { id: '12b', label: 'Comunicar libremente mis pensamientos y emociones' },
  ],
  [
    { id: '13a', label: 'Planificar de antemano basándome en proyecciones' },
    { id: '13b', label: 'Planificar a medida que aparecen las necesidades' },
  ],
  [
    { id: '14a', label: 'Conocer gente nueva' },
    { id: '14b', label: 'Estar solo o con una persona a quien conozco bien' },
  ],
  [
    { id: '15a', label: 'El mundo de las ideas' },
    { id: '15b', label: 'El mundo de las hechos comprobables' },
  ],
  [
    { id: '16a', label: 'Las convicciones' },
    { id: '16b', label: 'Conclusiones verificables' },
  ],
  [
    { id: '17a', label: 'Llevar registro de mis compromisos y citas en agendas lo más que pueda' },
    { id: '17b', label: 'Evitar registrar mis compromisos y citas en agendas lo más que pueda' },
  ],
  [
    { id: '18a', label: 'Llevar a la práctica planes cuidadosa y detalladamente precisos' },
    { id: '18b', label: 'Diseñar planes y estructuras sin necesariamente llevarlos a la práctica' },
  ],
  [
    { id: '19a', label: 'Sentirme libre de hacer las cosas según se presenten' },
    { id: '19b', label: 'Saber anticipadamente qué es lo que tengo que hacer' },
  ],
  [
    { id: '20a', label: 'Experimentar situaciones, discusiones o películas con alto contenido emocional' },
    { id: '20b', label: 'Usar mi habilidad para analizar situaciones' },
  ],
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.state = {
      answers: {},
      name: '',
      email: '',
      formErrors: false,
    };
  }
  handleChange = fieldType => (event) => {
    const value = event.target.value;
    this.setState(() => (fieldType === 'name' ? { name: value } : { email: value }))
  };
  handleChangeSlider(id, value) {
    this.setState(state => {
      const answers = state.answers;
      answers[id] = value;
      return { answers };
    });
  };
  processForm = () => {
    const { answers, name, email, formErrors } = this.state;
    // this.setState(() => (fieldType === 'name' ? { name: value } : { email: value }))
    console.log(answers, name, email, formErrors);
    if (Object.keys(answers).length < 20) {
      this.setState(() => ({ formErrors: true }));
    }
  };
  handleSnackbarClose = () => {
    this.setState(() => ({ formErrors: false }));
  }

  render() {
    const { answers, name, email, formErrors } = this.state;
    const message = 'Por favor completá todas las respuestas.'

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
      </div>
    );
  }
}
  
export default Form;
