import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './NotFoundView.scss';
import nothing from '../assets/404-page.png';

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <Paper className="Nada_Paper">
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <p>
              <span>Y</span> absolutamente nada fue hayado en esta ruta hoy...
            </p>
          </Grid>
          <Grid item xs={4} className="ImgContainer_GridItem">
            <img src={nothing} alt="absolutamente nada" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default NotFoundView;
