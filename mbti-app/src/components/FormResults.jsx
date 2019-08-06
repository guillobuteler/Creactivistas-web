import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';

import FormResultsGroup from './FormResultsGroup';
import { scalesMap } from '../constants'
import './FormResults.css';


class FormResults extends React.Component {
  render() {
    const { name, answers } = this.props.data;

    return (
      <div className="FormResults">
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={11}>
              <Paper className="results-paper" style={{marginTop: 35}}>
                Estos son tus resultados {name}
              </Paper>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              {
                scalesMap.map((scale, index) => (
                  <FormResultsGroup
                    key={index}
                    // mapName={index}
                    scale={scale}
                    answers={answers}
                  />
                ))
              }
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              Tu tipo de preferencias MBTI
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Grid item xs={11}>
              <Paper className="results-paper" style={{marginTop: 35}}>
                Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
              </Paper>
            </Grid>
        </Grid>
      </div>
    );
  }
}
  
export default FormResults;
