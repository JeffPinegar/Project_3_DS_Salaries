const name = 'Travis Taylor';

const title = `${name}'s First Plotly Chart`;

const books = ['The Visual Display of Quantitative Information', 'Automate the Boring Stuff', 'Data Science from Scratch'];

const timesRead = [100, 50, 25];

const trace1 = {
  x: books,
  y: timesRead,
  type: 'bar',
};

const data = [trace1];

const layout = {
  title: title,
};

Plotly.newPlot('bar', data, layout);
// Plotly.newPlot("plot", [trace1], layout);
