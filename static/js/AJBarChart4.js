const name4 = 'Small Company Salaries';

const title4 = `Average Salaries in Small Companies`;

const SMYear = ['2020', '2021', '2022'];

const SalaryAvg4 = [70958.56, 81509.84, 77046.54];

const trace4 = {
  x: SMYear,
  y: SalaryAvg4,
  type: 'bar',
};

const data4 = [trace4];

const layout4 = {
  xaxis: {
    type: 'category'
  },
  title: title4,
};

Plotly.newPlot('bar4', data4, layout4);
// Plotly.newPlot("plot", [trace1], layout);
