import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

import FormResultsGroup from './FormResultsGroup';
import FormResultsCharts from './FormResultsCharts';
import { scalesMap, totalsInit } from '../constants'
import './FormResults.css';


class FormResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGraph: false,
      totals: totalsInit,
    };
  }
  handleClickOpen = () => {
    this.setState(() => ({ showGraph: true }));
  }
  handleClose = () => {
    this.setState(() => ({ showGraph: false }));
  }
  handleTotalsCalculation = (char, value) => {
    const { totals } = this.state;
    if (totals[char] !== value) {
      totals[char] = value;
      this.setState(() => ({ totals }));
    }
  }
  getMBTI = () => {
    const { totals } = this.state;
    let mbti = (totals.I > totals.E) ? 'I' : 'E';
    mbti += (totals.N > totals.S) ? 'N' : 'S';
    mbti += (totals.T > totals.F) ? 'T' : 'F';
    mbti += (totals.P > totals.J) ? 'P' : 'J';
    return mbti;
  }
  render() {
    const { showGraph, totals } = this.state;
    const { name, answers } = this.props.data;
    const mbti = this.getMBTI();
    return (
      <div className="FormResults">
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={11}>
              <Paper className="ResultsPaper" style={{marginTop: 35}}>
              <span>Estos son tus resultados {name}</span>
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
                    handleTotalsCalculation={this.handleTotalsCalculation}
                  />
                ))
              }
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              <Paper className="results-group" style={{marginTop: 18}}>
                <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell className="MBTI-header">Tu tipo de preferencias MBTI</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="MBTI-result">{mbti}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5} style={{marginTop: 25}}>
              <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                Ver Gráfico
              </Button>
              <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={showGraph}>
                <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                  {mbti}
                </DialogTitle>
                <DialogContent dividers>
                  <FormResultsCharts totals={totals} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cerrar
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={11}>
                <Paper className="ResultsPaper" style={{marginTop: 35}}>
                  Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
                </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
  
export default FormResults;
