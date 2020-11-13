import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class FormResultsGroup extends React.Component {
  renderAxisCells = (keysArray) => (
    keysArray.map((key, i)=>(
      <TableCell
        key={i}
        className="AxisCell"
      >
        {this.props.answers[key]}
      </TableCell>
    ))
  );

  sumAxisTotal = (char, keysArray) => {
    const { answers, handleTotalsCalculation } = this.props;
    let total = 0;
    keysArray.map((key, i) => {
      total += answers[key];
      return key;
    });
    handleTotalsCalculation(char, total);
    return total;
  };

  render() {
    const { scale } = this.props;

    return (
      <Paper className="ResultsGroup_Paper" style={{
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
                  background: '#404040'
                }}>{scale.question}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{
              color: 'white',
              fontSize: '1rem',
              background: '#777'
            }}>{scale.title}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
              {
                scale.axisMap.map((axis, i) => (
                  <Table key={i}>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {axis.title}
                        </TableCell>
                        {this.renderAxisCells(axis.keys)}
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row" style={{
                          textAlign: 'center',
                          fontWeight: 700,
                          background: '#eee'
                        }}>
                          <span style={{fontSize: '1.1rem', marginRight: 9}}>{axis.char}</span> total
                        </TableCell>
                        <TableCell colSpan="5" style={{
                          textAlign: 'center',
                          fontWeight: 700,
                          background: '#eee'
                        }}>
                          {this.sumAxisTotal(axis.char, axis.keys)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                ))
              }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <style jsx>
          {`
            .ResultsGroup_Paper .AxisTotal span {
              font-size: 18px;
              margin-right: 9px;
            }
          `}
        </style>
      </Paper>
    );
  }
}
  
export default FormResultsGroup;
