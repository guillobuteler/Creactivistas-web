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
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import FormResultsGroup from './FormResultsGroup';
import ResultsChart from './ResultsChart';
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
  renderMBTI = () => {
    const { totals } = this.state;
    let mbti = (totals.i > totals.e) ? 'I' : 'E';
    mbti += (totals.n > totals.s) ? 'N' : 'S';
    mbti += (totals.t > totals.f) ? 'T' : 'F';
    mbti += (totals.p > totals.j) ? 'P' : 'J';
    return mbti;
  }
  render() {
    const { showGraph } = this.state;
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
                      <TableCell className="MBTI-result">{this.renderMBTI()}</TableCell>
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
                  El gráfico de tus resultados
                </DialogTitle>
                <DialogContent dividers>
                  <ResultsChart />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Imprimir
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={11}>
                <Paper className="results-paper" style={{marginTop: 35}}>
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
