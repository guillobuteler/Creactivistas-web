import { Component } from 'react'
import { Radar, HorizontalBar } from 'react-chartjs-2';
import { calcularMBTI } from '../../../../lib/actus/functions'

export default class extends Component {
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
          labels: ['I', 'E', 'N', 'S', 'F', 'T', 'P', 'J'],
          datasets: [{
              label: 'Valores MBTI',
              data: [totals.I, totals.E, totals.N, totals.S, totals.F, totals.T, totals.P, totals.J ],
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
      totals
    };
  }
  render() {
    const {
      radarBackdropData,
      radarBackdropOptions,
      radarData,
      radarOptions,
      horizontalBarData,
      horizontalBarOptions,
      totals
    } = this.state;
    let mbti = calcularMBTI(totals);
    return (
      <div className="ChartsResultados">
        <h1 style={{
          fontSize: '2.5rem',
          fontFamily: 'constantiaregular,serif',
          letterSpacing: 9
        }}>{mbti}</h1>
        <div>
          <div id="RadarContainer" style={{
            marginTop: 12,
            marginBottom: 24,
            fontSize: '2rem',
            position: 'relative'
          }}>
            <Radar data={radarBackdropData} options={radarBackdropOptions} />
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div style={{width:'60%', margin: '24px auto 24px auto'}}>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: 10,
              textAlign: 'center'
            }}>Valores individuales por eje MBTI</h3>
            <HorizontalBar data={horizontalBarData} options={horizontalBarOptions} />
          </div>
          <div style={{
            border: '1px solid #cdd3d6',
            borderRadius: 3,
            backgroundColor: '#edf3f6',
            width: '75%',
            margin: '35px auto 42px auto',
            padding: '18px 20px',
            textAlign: 'left'
          }}>
            Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
          </div>
        </div>
        <style jsx global>
          {`
            #RadarContainer canvas:last-child {
              position: absolute;
              top: 0;
            }
          `}
        </style>
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
