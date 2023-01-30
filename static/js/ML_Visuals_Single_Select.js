/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// This is where the data is located
const source = './data/DS_Salary.csv';

// Read in the CSV file
d3.csv(source).then(function(data) {
  processData(data);
});


// Create my global variablies for the plotting

// Trace 1 Salary by Experience
const xExpALL = []; // initialize x-axis values experience
const xExpUS = []; // initialize x-axis values experience
const yExpALL =[];
const yExpUS = [];

// Trace 2: Number of people working in Machine learning
const xYearALL = []; // Intialize x-axis value for position in all countries
const xYearUS = []; // Intialize x-axis value for position in USA
const yIDALL = []; // Initalize y-axis value for all countries
const yIDUS = []; // Initalize y-axis value for USA

// Trace 3:  Salary by Job Title
const xPosALL = []; // initialize x-axis value for postion in all countries
const xPosUS = []; // initialize x-axis value for position in USA
const yPosALL = []; // initialize y-axis values for all the countries
const yPosUS =[]; // initialize y-axis values for USA only

// collection of Machine learning only
const ML =[]; // this will be the data set for only Machine learning professionals


// ##############  get the data  ##############################  get the data  #################  get the data  #######################################
// This function is used to stuff the data into the variables for plotting ------------------------------------------------- define funtion ----------
function processData(allRows) {
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];

    // select only the rows that are for Machine learning
    if (row['Machine_learning']==='ML Professional') {
      ML.push(row);
    }
  }
  allRows=ML;
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];
    xExpALL.push(row['Experience']);
    xYearALL.push(row['work_year']);
    xPosALL.push(row ['job_title']);

    yExpALL.push(row['salary_in_usd']);
    yIDALL.push(row['id']);
    yPosALL.push(row['salary_in_usd']);


    // get the y data for only the USA
    if (row['company_location'] === 'US') {
      xExpUS.push(row['Experience']);
      xYearUS.push(row['work_year']);
      xPosUS.push(row ['job_title']);

      yExpUS.push(row['salary_in_usd']);
      yIDUS.push(row['id']);
      yPosUS.push(row['salary_in_usd']);
    };
  }
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDataset').on('change', updatePlotly);

// ##############  on Exp Change  ##############################    on Exp Change    #################    on Exp Change    #######################################
// This function is called when a dropdown menu item is selected ----------------------------------------------------------------------- define funtion ----------
function updatePlotly() {
  // Use D3 to select the dropdown menu
  const dropdownMenu = d3.select('#selDataset');
  // Assign the value of the dropdown menu option to a variable
  const dataset = dropdownMenu.property('value');

  if (dataset === 'allCountries') {
    // Do this stuff
    y1 = yExpALL;
    y2 = yIDALL;
    y3 = yPosALL;
    x1 = xExpALL;
    x2 = xYearALL;
    x3 = xPosALL;
  } else if (dataset === 'onlyUSA') {
    // Do this other stuff
    y1 = yExpUS;
    y2 = yIDUS;
    y3 = yPosUS;
    x1 = xExpUS;
    x2 = xYearUS;
    x3 = xPosUS;
  }


  // build the traces for the Average Salay by Experience Plot
  const layout1 = {
    height: 500,
    yaxis: {
      title: 'Average Salary [USD]',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Level of Experience', standoff: 10},
      titlefont: {size: 18},

      categoryorder: 'array',
      categoryarray: ['Entry-level Junior ', 'Mid-level Intermediate ', 'Senior-level Expert ', 'Executive-level Director'],

    },
  };
  const traces1 = [{
    x: x1,
    y: y1,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x1,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true}]}],
  }];
  Plotly.react('ML_Exp_Level', traces1, layout1, {displayModeBar: false});


  // Build traces for the number of jobs in Machine learing.
  const layout2 = {
    height: 500,
    yaxis: {
      title: 'Number of ML Staff',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Survey Year', standoff: 10},
      titlefont: {size: 18},
    },
  };
  const traces2 = [{
    x: x2,
    y: y2,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x2,
      aggregations: [
        {target: 'y', func: 'count', enabled: true}]}], // this needs to change to a count not an average
  }];
  Plotly.react('ML_ID_Count', traces2, layout2, {displayModeBar: false}); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses


  // build the traces for the Machine Learning Employment Plot
  const layout3 = {
    height: 600,
    yaxis: {
      title: 'Average Salary [USD]',
      titlefont: {size: 18},
    },
    xaxis: {
      automargin: true,
      title: {text: 'Job Titles in Machine Learning', standoff: 10},
      titlefont: {size: 18},
    },
  };
  const traces3 = [{
    x: x3,
    y: y3,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x3,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true}]}],
  }];
  Plotly.react('ML_Pos_Age_Sal', traces3, layout3, {displayModeBar: false});
};


// ##############  Initialization ML Plots #################  Initialization  ML Plots  #################  Initialization  ML Plots #################
// This is needed populate the chart the first time. ----------------------------------------------------------------------- define funtion ----------
// to get an inital chart with real data I had to read that data inside the init function.
// The chart will be slow to populate

function init2() {
  d3.csv('./data/DS_Salary.csv').then(function(data) {
    for (let i=0; i<data.length; i++) {
      row = data[i];

      // select only the rows that are for Machine learning
      if (row['Machine_learning']==='ML Professional') {
        ML.push(row);
      }
    }

    for (let i=0; i<ML.length; i++) {
      row = ML[i];
      xExpALL.push(row['Experience']);
      xYearALL.push(row['work_year']);
      xPosALL.push(row ['job_title']);

      yExpALL.push(row['salary_in_usd']);
      yIDALL.push(row['id']);
      yPosALL.push(row['salary_in_usd']);
    }
    y1 = yExpALL;
    y2 = yIDALL;
    y3 = yPosALL;
    x1 = xExpALL;
    x2 = xYearALL;
    x3 = xPosALL;

    // build the traces for the Average Salay by Experience Plot
    const layout1 = {
      height: 500,
      yaxis: {
        title: 'Average Salary [USD]',
        titlefont: {size: 18},
      },
      xaxis: {
        automargin: true,
        title: {text: 'Level of Experience', standoff: 10},
        titlefont: {size: 18},
        categoryorder: 'array',
        categoryarray: ['Entry-level Junior ', 'Mid-level Intermediate ', 'Senior-level Expert ', 'Executive-level Director'],
      },
    };
    const traces1 = [{
      x: x1,
      y: y1,
      type: 'bar',
      transforms: [{
        type: 'aggregate',
        groups: x1,
        aggregations: [
          {target: 'y', func: 'avg', enabled: true}]}],
    }];
    Plotly.react('ML_Exp_Level', traces1, layout1, {displayModeBar: false}); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses


    // Build traces for the number of jobs in Machine learing.
    const layout2 = {
      height: 500,
      yaxis: {
        title: 'Number of ML Staff',
        titlefont: {size: 18},
      },
      xaxis: {
        automargin: true,
        title: {text: 'Survey Year', standoff: 10},
        titlefont: {size: 18},
      },
    }; const traces2 = [{
      x: x2,
      y: y2,
      type: 'bar',
      transforms: [{
        type: 'aggregate',
        groups: x2,
        aggregations: [
          {target: 'y', func: 'count', enabled: true}]}], // this needs to change to a count not an average
    }];
    Plotly.react('ML_ID_Count', traces2, layout2, {displayModeBar: false}); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses


    // build the traces for the Machine Learning Employment Plot
    const layout3 = {
      height: 600,
      yaxis: {
        title: 'Average Salary [USD]',
        titlefont: {size: 18},
      },
      xaxis: {
        automargin: true,
        title: {text: 'Job Titles in Machine Learning', standoff: 10},
        titlefont: {size: 18},
      },
    }; const traces3 = [{
      x: x3,
      y: y3,
      type: 'bar',
      transforms: [{
        type: 'aggregate',
        groups: x3,
        aggregations: [
          {target: 'y', func: 'avg', enabled: true}]}],
    }];
    Plotly.react('ML_Pos_Age_Sal', traces3, layout3, {displayModeBar: false});
  });
}

init2();
