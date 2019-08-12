import React from 'react';
import ResultsCharts from '../components/Charts/ResultsCharts';
import { totalsInit } from '../constants';

const ChartsView = (browser) => {
  const totalsArray = browser.match.params.totals.split(',');
  const totals = totalsInit;
  totals.E = totalsArray[0];
  totals.I = totalsArray[1];
  totals.N = totalsArray[2];
  totals.S = totalsArray[3];
  totals.T = totalsArray[6];
  totals.F = totalsArray[7];
  totals.P = totalsArray[4];
  totals.J = totalsArray[5];

  return <ResultsCharts totals={totals} />
};

export default ChartsView;
