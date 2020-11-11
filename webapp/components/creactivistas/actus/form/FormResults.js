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

import FormResultsGroup from './FormResultsGroup';
import ChartsResultados from '../charts/ChartsResultados';
import { scalesMap, totalsInit } from '../constants'


class FormResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGraph: false,
      totals: totalsInit,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
              <Paper className="Results_Paper Title">
                Estos son tus resultados <span>{name}</span>
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
              <Paper className="ResultsMBTI_Paper" style={{marginTop: 18}}>
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
              <Dialog id="Charts_Dialog" onClose={this.handleClose} open={showGraph}>
                <DialogTitle className="Charts_Dialog-Title"onClose={this.handleClose}>
                  {mbti}
                </DialogTitle>
                <DialogContent dividers>
                  <ChartsResultados totals={totals} />
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
                <Paper className="Results_Paper Footer">
                  Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
                </Paper>
            </Grid>
          </Grid>
        </Grid>
        <style jsx>
          {`
            .FormResults {
              background: #ccc;
            }
            .FormResults .Results_Paper {
              background: #E4E4E0 !important;
              border-radius: 18px !important;
              padding: 20px !important;
              margin-top: 35px !important;
              margin-bottom: 10px !important;
            }
            .FormResults .Results_Paper.Title {
              font-size: 27px;
            }
            .FormResults .Results_Paper.Title span {
              text-transform: capitalize;
            }
            .FormResults .ResultsMBTI_Paper .MBTI-header {
              color: white !important;
              font-size:16px !important;
              background: #777 !important;
            }
            .FormResults .ResultsMBTI_Paper .MBTI-result {
              color: #FFF !important;
              background: #444 !important;
              font-size:60px !important;
              font-family: 'constantiaregular', serif !important;
              letter-spacing:20px !important;
              text-align: center !important;
            }
            #Charts_Dialog .MuiDialog-paperWidthSm {
              width: 900px !important;
              max-width: 900px !important;
            }
            #Charts_Dialog .MuiDialog-paperWidthSm .Charts_Dialog-Title {
              color: white;
              background: #444;
              padding: 9px 24px;
            }
            #Charts_Dialog .MuiDialog-paperWidthSm .Charts_Dialog-Title h2 {
              font-size: 36px;
              line-height: 1.2;
              text-align: center;
              font-family: 'constantiaregular', serif;
            }
            #Charts_Dialog .MuiDialog-paperWidthSm .MuiDialogActions-root {
              padding-right: 16px;
            }
          `}
        </style>
      </div>
    );
  }
}
  
export default FormResults;
