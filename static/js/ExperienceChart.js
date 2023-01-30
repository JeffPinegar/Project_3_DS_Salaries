/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
/* eslint-disable no-var */
const name = 'Joe';

const title = `Chart 1`;

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

// Plotly.newPlot('bar2', data, layout);
// Plotly.newPlot('bar3', data, layout);
// Plotly.newPlot('bar4', data, layout);
// Plotly.newPlot("plot", [trace1], layout);

// Fetch file
d3.csv('./DS_salary.csv').then((d)=>{
  console.log(d);
  createBarChart(d);
});

function createBarChart(data) {
  const experiences = {};
  console.log(data);
  data.forEach((person)=>{
    if (person.Experience in experiences) {
      experiences[person.Experience].push(Number(person.salary_in_usd));
    } else {
      experiences[person.Experience]=[Number(person.salary_in_usd)];
    }
  });
  console.log(experiences);

  const salaries = [];
  for (let i=0; i < Object.keys(experiences).length; i++) {
    var sum = 0;
    experiences[Object.keys(experiences)[i]].forEach((salary_in_usd)=>{
      // eslint-disable-next-line camelcase
      sum += salary_in_usd;
    });
    salaries.push(sum/experiences[Object.keys(experiences)[i]].length);
  }

  const trace2 = {
    x: Object.keys(experiences),
    y: salaries,
    type: 'bar',
  };

  const data2 = [trace2];

  const layout2 = {
    title: title,
    height: 500,
    yaxis: {
      title: 'Average Salary [USD]',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Experience', standoff: 10},
      titlefont: {size: 18},
      fontStyle: 'bold',
    },
  };

  Plotly.newPlot('bar', data2, layout2);
}

