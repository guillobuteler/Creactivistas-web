import { Component } from 'react'
import { Router } from '../../../../routes'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import FormResultsGroup from './FormResultsGroup';
import { scalesMap, totalsInit } from '../constants'


class FormResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: totalsInit,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleClickVerGrafico = () => {
    const { totals } = this.state;
    let query = `${totals.I},${totals.E},${totals.N},${totals.S},${totals.T},${totals.F},${totals.P},${totals.J}`
    console.log(totals)
    console.log(query)
    Router.push(`/actus/resultados/${query}`)
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
    const { totals } = this.state;
    const { clientName, answers } = this.props.data;
    const mbti = this.getMBTI();
    return (
      <div className="FormResults">
        <Paper style={{
          border: '1px solid #cdd3d6',
          borderRadius: 3,
          backgroundColor: '#edf3f6',
          width: '90%',
          margin: '35px auto 10px auto',
          padding: '18px 20px',
          textAlign: 'left',
          fontSize:'1.2rem'
        }}>
          Estos son tus resultados <span style={{fontWeight:700, textTransform: 'capitalize'}}>{clientName}</span>
        </Paper>
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
        <Paper style={{
          border: '1px solid #adb3b6',
          marginTop: 35,
          marginBottom: 10,
          borderRadius: 3,
          textAlign: 'left',
          width: '60%',
          margin: '20px auto 20px auto'
        }}>
          <Table>
            <TableHead>
              <TableRow>
                  <TableCell style={{
                    color: 'white',
                    fontSize: '1rem',
                    background: '#777'
                  }}>Tu tipo de preferencias MBTI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{
                  background: '#404040',
                  color: 'white',
                  fontSize: '4rem',
                  textAlign: 'center',
                  fontFamily: 'constantiaregular,serif',
                  letterSpacing: 22
                }}>{mbti}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <div>
          <Button variant="contained" color="secondary" onClick={this.handleClickVerGrafico}>
            Ver Gráfico
          </Button>
        </div>
        <Paper style={{
          border: '1px solid #cdd3d6',
          borderRadius: 3,
          backgroundColor: '#edf3f6',
          width: '75%',
          margin: '35px auto 42px auto',
          padding: '18px 20px',
          textAlign: 'left'
        }}>
          Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
        </Paper>
        <style jsx>
          {`
            a {
              color: #00d090w;
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    );
  }
}
  
export default FormResults;
