/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
/* eslint-disable no-var */


// Fetch file
d3.csv('./data/DS_Salary.csv').then((d)=>{
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
    // title: title,
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

      // #####################

      categoryorder: 'array',
      categoryarray: ['Entry-level Junior ', 'Mid-level Intermediate ', 'Senior-level Expert ', 'Executive-level Director'],

      // ####################


    },
  };

  Plotly.newPlot('bar', data2, layout2);
}

