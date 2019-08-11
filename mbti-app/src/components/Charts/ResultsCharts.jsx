import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
import { Radar, HorizontalBar } from 'react-chartjs-2';

import './ResultsCharts.css';

class ResultsCharts extends React.Component {
  constructor(props) {
    super(props);
    const { totals } = props;
    this.state = {
      radarBackdropData: {
        labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        datasets: [
          {
            label: 'y',
            data: [25, 18, 0, 0, 0, 0, 0, 18],
            backgroundColor: [
              'rgba(222, 222, 40, 1)',
            ],
          },{
            label: 'r',
            data: [0, 18, 25, 18, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(222, 40, 40, 1)',
            ],
          },{
            label: 'g',
            data: [0, 0, 0, 18, 25, 18, 0, 0 ],
            backgroundColor: [
              'rgba(36, 130, 36, 1)',
            ],
          },{
            label: 'b',
            data: [0, 0, 0, 0, 0, 18, 25, 18],
            backgroundColor: [
              'rgba(40, 40, 222, 1)',
            ],
          },
        ],
      },
      radarBackdropOptions: {
        legend: { display: false },
        // scale: { display: false },
        scale: {
          gridLines: {
            lineWidth: 0,
          },
          pointLabels: {
            fontSize: 18,
          },
          ticks: {
            display: false,
          }
         },
        tooltips: { enabled: false },
        elements: {
          point: { radius: 0 },
          line: { tension: 0, borderWidth: 0 },
        },
      },
      radarData: {
          labels: ['Aire (N)', 'Fuego (T)', 'Tierra (S)', 'Agua (F)'],
          datasets: [
            {
              label: 'radar',
              data: [totals.N, totals.T, totals.S, totals.F],
              backgroundColor: 'rgba(222, 222, 40, 0)',
              borderColor: [
                'rgba(50, 50, 50, 1)',
              ],
              borderWidth: 5,
              pointRadius: 0,
          }]
      },
      radarOptions: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            lineWidth: 1,
          },
          pointLabels: {
            fontSize: 18,
          },
          ticks: {
            beginAtZero: true,
            max: 25,
            display: false,
          }
        },
      },
      horizontalBarData: {
          labels: ['I', 'E', 'N', 'S', 'F', 'T', 'J', 'P'],
          datasets: [{
              label: 'Valores MBTI',
              data: [totals.I, totals.E, totals.N, totals.S, totals.F, totals.T, totals.J, totals.P],
              backgroundColor: [
                  'rgba(155, 155, 155, 0.4)',
                  'rgba(155, 155, 155, 0.4)',
                  'rgba(222, 222, 40, 0.4)',
                  'rgba(40, 222, 40, 0.4)',
                  'rgba(40, 40, 222, 0.4)',
                  'rgba(222, 40, 40, 0.4)',
                  'rgba(155, 155, 155, 0.4)',
                  'rgba(155, 155, 155, 0.4)',
              ],
              borderColor: [
                'rgba(155, 155, 155, 1)',
                'rgba(155, 155, 155, 1)',
                'rgba(222, 222, 40, 1)',
                'rgba(40, 222, 40, 1)',
                'rgba(40, 40, 222, 1)',
                'rgba(222, 40, 40, 1)',
                'rgba(155, 155, 155, 1)',
                'rgba(155, 155, 155, 1)',
              ],
              borderWidth: 1
          }]
      },
      horizontalBarOptions: {
        legend: {
          display: false,
        },
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
    const {
      radarBackdropData,
      radarBackdropOptions,
      radarData,
      radarOptions,
      horizontalBarData,
      horizontalBarOptions
    } = this.state;
    return (
      <div className="ResultsCharts">
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={12}>
              <Container className="ChartsContainer">
                <Container className="RadarContainer">
                  <Radar data={radarBackdropData} options={radarBackdropOptions} />
                  <Radar data={radarData} options={radarOptions} />
                </Container>
                <Container className="HorizontalBarContainer">
                  <h3>Valores individuales por eje MBTI</h3>
                  <HorizontalBar data={horizontalBarData} options={horizontalBarOptions} />
                </Container>
              </Container>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
  
export default ResultsCharts;
