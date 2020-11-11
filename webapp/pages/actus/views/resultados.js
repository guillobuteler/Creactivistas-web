import ChartsResultados from '../../../components/creactivistas/actus/charts/ChartsResultados';
import { totalsInit } from '../../../components/creactivistas/actus/constants';

export default ResultadosActus = (browser) => {
  const totalsArray = browser.match.params.totals.split(',');
  const totals = totalsInit;
  totals.I = totalsArray[0];
  totals.E = totalsArray[1];
  totals.N = totalsArray[2];
  totals.S = totalsArray[3];
  totals.T = totalsArray[4];
  totals.F = totalsArray[5];
  totals.P = totalsArray[6];
  totals.J = totalsArray[7];

  return <ChartsResultados totals={totals} />
};
