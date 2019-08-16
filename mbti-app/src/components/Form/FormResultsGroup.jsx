import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './FormResultsGroup.scss';


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
      <Paper className="ResultsGroup_Paper" style={{marginTop: 18}}>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell className="GroupQuestion">{scale.question}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="GroupTitle">{scale.title}</TableCell>
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
                        <TableCell component="th" className="AxisTotal" scope="row">
                          <span>{axis.char}</span> total
                        </TableCell>
                        <TableCell className="AxisTotal" colSpan="5">
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
      </Paper>
    );
  }
}
  
export default FormResultsGroup;
