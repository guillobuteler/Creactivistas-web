import React from 'react';
import ResultsCharts from '../components/Charts/ResultsCharts';
import { totalsInit } from '../constants';

const ChartsView = (browser) => {
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

  return <ResultsCharts totals={totals} />
};

export default ChartsView;
