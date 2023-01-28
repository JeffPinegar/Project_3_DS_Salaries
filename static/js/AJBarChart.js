const name = 'Company Sizes Salary';

const title = `Average Salary Per Company Size`;

const CompanySize = ['Large', 'Medium', 'Small'];

const SalaryAvg = [118556.59, 105117.90, 76504.98];

const trace1 = {
  x: CompanySize,
  y: SalaryAvg,
  type: 'bar',
};

const data = [trace1];

const layout = {
  title: title,
};

Plotly.newPlot('bar', data, layout);
// Plotly.newPlot("plot", [trace1], layout);
