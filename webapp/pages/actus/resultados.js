import { Component } from 'react'
import ChartsResultados from '../../components/creactivistas/actus/charts/ChartsResultados';
import { totalsInit } from '../../lib/actus/constants';

export default class extends Component {
  static async getInitialProps ({ query }) {
    const totals = totalsInit
    const data = query.data && query.data.split(',') || []
    // console.log(query)

    return { totals, data }
  }

  constructor (props) {
    super(props)
    this.state = {
      totals: props.totals,
      data: props.data,
    }
  }
  
  render() {
    const { totals, data } = this.state
    if (data[0]) totals.I = parseInt(data[0])
    if (data[1]) totals.E = parseInt(data[1])
    if (data[2]) totals.N = parseInt(data[2])
    if (data[3]) totals.S = parseInt(data[3])
    if (data[4]) totals.T = parseInt(data[4])
    if (data[5]) totals.F = parseInt(data[5])
    if (data[6]) totals.P = parseInt(data[6])
    if (data[7]) totals.J = parseInt(data[7])
    return <ChartsResultados totals={totals} />
  }
};
