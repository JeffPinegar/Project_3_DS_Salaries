const name3 = 'Medium Company Salaries';

const title3 = `Average Salaries in Medium Companies`;

const MedYear = ['2020', '2021', '2022'];

const SalaryAvg3 = [115467.50, 74154.79, 125731.40];

const trace3 = {
  x: MedYear,
  y: SalaryAvg3,
  type: 'bar',
};

const data3 = [trace3];

const layout3 = {
  xaxis: {
    type: 'category'
  },
  title: title3,
};

Plotly.newPlot('bar3', data3, layout3);
// Plotly.newPlot("plot", [trace1], layout);
