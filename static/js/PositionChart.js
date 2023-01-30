/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
const name = 'Joe';

const title = ``;

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
  height: 500,
  yaxis: {
    title: 'Average Salary [USD]',
    titlefont: {size: 18},
  },
  xaxis: {
    automargin: true,
    title: {text: 'Position', standoff: 10},
    titlefont: {size: 18},
  },
};

// Plotly.newPlot('bar2', data, layout);
// Plotly.newPlot('bar3', data, layout);
// Plotly.newPlot('bar4', data, layout);
// Plotly.newPlot("plot", [trace1], layout);

// Fetch file
d3.csv('./data/DS_Salary.csv').then((d) => {
  console.log(d);
  createBarChart(d);
});

function createBarChart(data) {
  const positions = {};
  console.log(data);
  data.forEach((person) => {
    if (person.job_title in positions) {
      positions[person.job_title].push(Number(person.salary_in_usd));
    } else {
      positions[person.job_title] = [Number(person.salary_in_usd)];
    }
  });
  console.log(positions);


  const categories = {};
  console.log(data);
  data.forEach((person) => {
    if (person.Category in categories) {
      categories[person.Category].push(Number(person.salary_in_usd));
    } else {
      categories[person.Category] = [Number(person.salary_in_usd)];
    }
  });
  console.log(categories);

  const salaries = [];
  for (var i = 0; i < Object.keys(positions).length; i++) {
    var sum = 0;
    positions[Object.keys(positions)[i]].forEach((salary_in_usd) => {
      sum += salary_in_usd;
    });
    salaries.push(sum / positions[Object.keys(positions)[i]].length);
  }

  const salaries2 = [];
  for (var i = 0; i < Object.keys(categories).length; i++) {
    var sum = 0;
    categories[Object.keys(categories)[i]].forEach((salary_in_usd) => {
      sum += salary_in_usd;
    });
    salaries2.push(sum / categories[Object.keys(categories)[i]].length);
  }


  const trace2 = {
    x: Object.keys(positions),
    y: salaries,
    type: 'bar',
  };

  const data2 = [trace2];

  const layout2 = {
    title: title,
    height: 700,
    yaxis: {
      title: 'Average Salary [USD]',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Position', standoff: 10},
      titlefont: {size: 18},
    },
  };

  // chart 2 on position page
  const trace3 = {
    x: Object.keys(categories),
    y: salaries2,
    type: 'bar',
  };

  const data3 = [trace3];

  const layout3 = {
    title: title,
    height: 500,
    yaxis: {
      title: 'Average Salary [USD]',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Category', standoff: 10},
      titlefont: {size: 18},
    },
  };


  Plotly.newPlot('bar', data2, layout2);
  Plotly.newPlot('bar2', data3, layout3);
}

