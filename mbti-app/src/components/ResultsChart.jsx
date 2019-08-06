import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Radar, HorizontalBar } from 'react-chartjs-2';

class ResultsChart extends React.Component {
  constructor(props) {
    super(props);
    const { mbti, totals } = props;
    this.state = {
      radarData: {
          labels: ['N', 'S', 'F', 'T'],
          datasets: [{
              label: mbti,
              data: [totals.N, totals.S, totals.F, totals.T],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
          }]
      },
      horizontalBarData: {
          labels: ['I', 'E', 'N', 'S', 'F', 'T', 'J', 'P'],
          datasets: [{
              label: 'Valores MBTI',
              data: [totals.I, totals.E, totals.N, totals.S, totals.F, totals.T, totals.J, totals.P],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 119, 64, 0.2)',
                  'rgba(255, 79, 67, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 119, 64, 1)',
                  'rgba(255, 79, 67, 1)',
              ],
              borderWidth: 1
          }]
      },
      horizontalBarOptions: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              max: 25,
            }
          }],
        },
      },
    };
  }
  render() {
    const { radarData, horizontalBarData, horizontalBarOptions } = this.state;
    return (
      <div className="ResultsChart">
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={11}>
              <Paper className="results-paper">
                <Radar data={radarData} options={horizontalBarOptions} />
                <HorizontalBar data={horizontalBarData} options={horizontalBarOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
  
export default ResultsChart;
