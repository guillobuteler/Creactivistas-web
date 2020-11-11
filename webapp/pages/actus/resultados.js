import { Component } from 'react'
// import { useRouter } from 'next/router'
import ChartsResultados from '../../components/creactivistas/actus/charts/ChartsResultados';
import { totalsInit } from '../../components/creactivistas/actus/constants';

export default class extends Component {
  static async getInitialProps ({ query }) {
    const totals = totalsInit
    const data = query.data && query.data.split(',') || []
    console.log(query)

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
    // const router = useRouter()
    // console.log(router)
  
    const { totals, data } = this.state
    if (data[0]) totals.I = data[0]
    if (data[1]) totals.E = data[1]
    if (data[2]) totals.N = data[2]
    if (data[3]) totals.S = data[3]
    if (data[4]) totals.T = data[4]
    if (data[5]) totals.F = data[5]
    if (data[6]) totals.P = data[6]
    if (data[7]) totals.J = data[7]
  
    return <ChartsResultados totals={totals} />
  }
};
