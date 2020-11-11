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
        <style jsx>
          {`
            .ResultsGroup_Paper .GroupQuestion {
              color: white;
              font-size: 16px;
              background: #444;
            }
            .ResultsGroup_Paper .GroupTitle {
              color: white;
              font-size: 16px;
              background: #777;
            }
            .ResultsGroup_Paper .AxisTotal {
              text-align: center;
              font-weight: 700;
              background: #eee;
            }
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
