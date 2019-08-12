import React from 'react';
import ResultsCharts from '../components/Charts/ResultsCharts';
import { totalsInit } from '../constants';


const ChartsBlindShotView = (href) => {
  // chart?4&34&43&41&33&44&44&44&33&33&44&53&42&33&43&43&44&23&34&32&3
  const querystring = href.location.search.slice(1);
  const doh = querystring.split('&'); //badlyConcatenatedAnswersArray
  const totals = totalsInit;

  // ["4", "34", "43", "41", "33", "44", "44", "44", "33", "33", "44", "53", "42", "33", "43", "43", "44", "23", "34", "32", "3"]
  // [1a, 1b2a, 2b3a, 3b4a, 4b5a, 5b6a, 6b7a, 7b8a, 8b9a, 9b10a, 10b11a, 11b12a, 12b13a, 13b14a, 14b15a, 15b16a, 16b17a, 17b18a, 18b19a, 19b20a, 20b]
  //   0                            5                              10                                      15                                     20
  /*
    axisMap:
      char: 'E', keys: ['1a', '5b', '9b', '12b', '14a'],
      char: 'I', keys: ['1b', '5a', '9a', '12a', '14b'],
      char: 'N', keys: ['2a', '6b', '10a', '15a', '18b'],
      char: 'S', keys: ['2b', '6a', '10b', '15b', '18a'],
      char: 'T', keys: ['3a', '7a', '11b', '16b', '20b'],
      char: 'F', keys: ['3b', '7b', '11a', '16a', '20a'],
      char: 'P', keys: ['4a', '8a', '13b', '17b', '19a'],
      char: 'J', keys: ['4b', '8b', '13a', '17a', '19b'],
    */
  totals.E = parseInt(doh[0])+parseInt(doh[5].slice(0,1))+parseInt(doh[9].slice(0,1))+parseInt(doh[12].slice(0,1))+parseInt(doh[13].slice(1));
  totals.I = parseInt(doh[1].slice(0,1))+parseInt(doh[4].slice(1))+parseInt(doh[8].slice(1))+parseInt(doh[11].slice(1))+parseInt(doh[14].slice(0,1));
  totals.N = parseInt(doh[1].slice(1))+parseInt(doh[6].slice(0,1))+parseInt(doh[9].slice(1))+parseInt(doh[14].slice(1))+parseInt(doh[18].slice(0,1));
  totals.S = parseInt(doh[2].slice(0,1))+parseInt(doh[5].slice(1))+parseInt(doh[10].slice(0,1))+parseInt(doh[15].slice(0,1))+parseInt(doh[17].slice(1));
  totals.T = parseInt(doh[2].slice(1))+parseInt(doh[6].slice(1))+parseInt(doh[11].slice(0,1))+parseInt(doh[16].slice(0,1))+parseInt(doh[20]);
  totals.F = parseInt(doh[3].slice(0,1))+parseInt(doh[7].slice(0,1))+parseInt(doh[10].slice(1))+parseInt(doh[15].slice(1))+parseInt(doh[19].slice(1));
  totals.P = parseInt(doh[3].slice(1))+parseInt(doh[7].slice(1))+parseInt(doh[13].slice(0,1))+parseInt(doh[17].slice(0,1))+parseInt(doh[18].slice(1));
  totals.J = parseInt(doh[4].slice(0,1))+parseInt(doh[8].slice(0,1))+parseInt(doh[12].slice(1))+parseInt(doh[16].slice(1))+parseInt(doh[19].slice(0,1));

  return <ResultsCharts totals={totals} />
};

export default ChartsBlindShotView;