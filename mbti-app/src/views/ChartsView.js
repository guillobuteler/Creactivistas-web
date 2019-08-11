import React from 'react';
import ResultsCharts from '../components/Charts/ResultsCharts';

const ChartsView = (totals) => {
    console.log(totals)

    return <ResultsCharts totals={totals} />
};

export default ChartsView;