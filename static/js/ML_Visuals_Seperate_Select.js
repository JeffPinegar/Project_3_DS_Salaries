/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// This is where the data is located
const source = './data/DS_Salary.csv';

// Read in the CSV file
d3.csv(source).then(function(data) {
  // console.log('Inside d3 csv file read');
  // console.log(data);
  processData(data);
  // console.log(data);
});


// Create my global variablies for the plotting
const xExp = []; // initialize x-axis values experience
const xPosALL = []; // initialize x-axis value for postion in all countries
const xPosUS = []; // initialize x-axis value for position in USA
const xYearALL = []; // Intialize x-axis value for position in all countries
const xYearUS = []; // Intialize x-axis value for position in USA
const yIDALL = []; // Initalize y-axis value for all countries
const yIDUS = []; // Initalize y-axis value for USA
const yALL = []; // initialize y-axis values for all the countries
const yUS=[]; // initialize y-axis values for USA only
const yi = []; // storage of initial values
const xi = []; // storage of initial values
const ML =[]; // this will be the data set for only Machine learning professionals

// ##############  get the data  ##############################  get the data  #################  get the data  #######################################
// This function is used to stuff the data into the variables for plotting ------------------------------------------------- define funtion ----------
function processData(allRows) {
  console.log('inside prodcess data: ', allRows);
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];

    // select only the rows that are for Machine learning
    if (row['Machine_learning']==='ML Professional') {
      ML.push(row);
      // console.log('ML: ', ML);
    }
    // ML.push(row);
    // console.log('ML: ', ML);
  }
  allRows=ML;
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];
    xExp.push( row['Experience'] );
    xPosALL.push(row ['job_title']);
    xYearALL.push(row['work_year']);

    // get the y data for all countries
    yALL.push( row['salary_in_usd'] );
    yIDALL.push(row['id']);

    // get the y data for only the USA
    if (row['company_location'] === 'US') {
      yUS.push( row['salary_in_usd'] );
      yIDUS.push(row['id']);
      xPosUS.push(row ['job_title']);
      xYearUS.push(row ['work_year']);
    };
  }
  // console.log('yUS: ', yUS);
  // console.log('yALL: ', yALL);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDataset').on('change', updatePlotlyExp);

// ##############  on Exp Change  ##############################    on Exp Change    #################    on Exp Change    #######################################
// This function is called when a dropdown menu item is selected ----------------------------------------------------------- define funtion ----------
function updatePlotlyExp() {
  // console.log('Inside updateplotly funtion');
  // Use D3 to select the dropdown menu
  const dropdownMenu = d3.select('#selDataset');
  // Assign the value of the dropdown menu option to a variable
  const dataset = dropdownMenu.property('value');

  if (dataset === 'allCountries') {
    // Do this stuff
    y = yALL;
  } else if (dataset === 'onlyUSA') {
    // Do this other stuff
    y = yUS;
  }


  // build the traces for the plot
  const traces = [{
    x: xExp,
    y: y,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: xExp,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true}]}],
  }];

  // console.log('traces: ', traces); // this is here to prove there is trace information before the DOM changes

  Plotly.react('ML_Exp_Level', traces); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses
};


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDatasetPos').on('change', updatePlotlyPos);

// ##############  on Pos Change  ##############################    on Pos Change    #################    on Pos Change    #######################################
// This function is called when a dropdown menu item is selected ----------------------------------------------------------- define funtion ----------
function updatePlotlyPos() {
  // console.log('Inside updateplotly funtion');
  // Use D3 to select the dropdown menu
  const dropdownMenu2 = d3.select('#selDatasetPos');
  // Assign the value of the dropdown menu option to a variable
  const dataset2 = dropdownMenu2.property('value');

  if (dataset2 === 'allCountries') {
    // Do this stuff
    y = yALL;
    x = xPosALL;
  } else if (dataset2 === 'onlyUSA') {
    // Do this other stuff
    y = yUS;
    x = xPosUS;
  }

  // console.log('After: Y =', y, 'x=', x); // this is to verify there is data present before the DOM is changed.

  // build the traces for the plot
  const traces = [{
    x: x,
    y: y,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true}]}],
  }];

  // console.log('traces: ', traces); // this is here to prove there is trace information before the DOM changes

  Plotly.react('ML_Pos_Age_Sal', traces); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses
};


// const xYearALL = []; // Intialize x-axis value for position in all countries
// const xYearUS = []; // Intialize x-axis value for position in USA
// const yIDALL = []; // Initalize y-axis value for all countries
// const yIDUS = []; // Initalize y-axis value for USA
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDatasetID').on('change', updatePlotlyID);

// ###################  No. of Emp Change  ###################    No. of Emp Change    ###################    No. of Emp Change    ###################
// This function is called when a dropdown menu item is selected ----------------------------------------------------------- define funtion ----------
function updatePlotlyID() {
  // console.log('Inside updateplotly funtion');
  // Use D3 to select the dropdown menu
  const dropdownMenu3 = d3.select('#selDatasetID');
  // Assign the value of the dropdown menu option to a variable
  const dataset3 = dropdownMenu3.property('value');

  if (dataset3 === 'allCountries') {
    // Do this stuff
    y = yIDALL;
    x = xYearALL;
  } else if (dataset3 === 'onlyUSA') {
    // Do this other stuff
    y = yIDUS;
    x = xYearUS;
  }

  // console.log('After: Y =', y, 'x=', x); // this is to verify there is data present before the DOM is changed.

  // build the traces for the plot
  const traces = [{
    x: x,
    y: y,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x,
      aggregations: [
        {target: 'y', func: 'count', enabled: true}]}], // this needs to change to a count not an average
  }];

  // console.log('traces: ', traces); // this is here to prove there is trace information before the DOM changes

  Plotly.react('ML_ID_Count', traces); // To add a title add this:  {title: 'Plotting my stuff'} inside the parentheses
};


// ##############  Initialization Experience #################  Initialization  Experience   #################  Initialization  Experience  #################
// This is needed populate the chart the first time. ----------------------------------------------------------- define funtion ----------
// to get an inital chart with real data I had to read that data inside the init function.
// The chart will be slow to populate

function init() {
  d3.csv('./data/DS_Salary.csv').then(function(data) {
    // console.log('Inside d3 csv file read');
    for (let i=0; i<data.length; i++) {
      row = data[i];
      xi.push( row['Experience'] );

      // get the y data for all countries
      yi.push( row['salary_in_usd'] );

      const itraces = [{
        x: xi,
        y: yi,
        type: 'bar',
        transforms: [{
          type: 'aggregate',
          groups: xi,
          aggregations: [
            {target: 'y', func: 'avg', enabled: true}]}],
      }];

      Plotly.newPlot('ML_Exp_Level', itraces); // If a title is needed add this inside the parentheses {title: 'Plotting my stuff'}
    };
  });
};


init();
