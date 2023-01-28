const name2 = 'Large Company Salaries';

const title2 = `Average Salaries in Large Companies`;

const LGYear = ['2020', '2021', '2022'];

const SalaryAvg2 = [106303.85, 118236.35, 131129.57];

const trace2 = {
  x: LGYear,
  y: SalaryAvg2,
  type: 'bar',
};

const data2 = [trace2];

const layout2 = {
  xaxis: {
    type: 'category'
  },
  title: title2,
};

Plotly.newPlot('bar2', data2, layout2);
// Plotly.newPlot("plot", [trace1], layout);
