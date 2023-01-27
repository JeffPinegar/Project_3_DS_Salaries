/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// This is where the data is located
const source3 = './data/DS_Salary.csv';

// Read in the CSV file
d3.csv(source3).then(function(data3) {
  // console.log('Inside d3 csv file read');
  // console.log(data);
  processData(data3);
});


// Create my global variablies for the plotting
const x3 = []; // initialize x-axis values are pushed here
const yall3 = []; // initialize y-axis values for all the countries
const yus3=[]; // initialize y-axis values for USA only
const y3 = [];
const ML3 =[];

// ##############  get the data  ##############################  get the data  #################  get the data  #######################################
// This function is used to stuff the data into the variables for plotting ------------------------------------------------- define funtion ----------
function processData(allRows) {
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];

    // seperate out all of the machine learning professionals from the rest
    if (row['Machine_learning']=='ML Professional') {
      ML3.push(row);
      console.log('ML3: ', ML3);
    }
    // ML.push(row);
    // console.log('ML: ', ML);
  }
  allRows=ML3;
  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];
    x3.push( row['job_title'] );

    // get the y data for all countries
    yall3.push( row['salary_in_usd'] );

    // get the y data for only the USA
    if (row['company_location'] == 'US') {
      yus3.push( row['salary_in_usd'] );
    };
  }
  console.log('yus: ', yus3);
  console.log('yall: ', yall3);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDataset').on('change', updatePlotly);

// ##############  on Change  ##############################    on Change    #################    on Change    #######################################
// This function is called when a dropdown menu item is selected ----------------------------------------------------------- define funtion ----------
function updatePlotly() {
  // console.log('Inside updateplotly funtion');
  // Use D3 to select the dropdown menu
  const dropdownMenu = d3.select('#selDatasetPos');
  // Assign the value of the dropdown menu option to a variable
  const dataset = dropdownMenu.property('value');

  y3=yall3; // this was an attempt to set a default value for y before there was a DOM change.

  if (dataset === 'allCountries') {
    // Do this stuff
    y3 = yall3;
  } else if (dataset === 'onlyUSA') {
    // Do this other stuff
    y3 = yus;
  }

  // console.log('After: Y =', y, 'x=', x); // this is to verify there is data present before the DOM is changed.

  // build the traces for the plot
  const traces = [{
    x: x3,
    y: y3,
    type: 'bar',
    transforms: [{
      type: 'aggregate',
      groups: x3,
      aggregations: [
        {target: 'y3', func: 'avg', enabled: true}]}],
  }];

  // console.log('traces: ', traces); // this is here to prove there is trace information before the DOM changes

  Plotly.react('ML_Pos_Age_Sal', traces); // to add a title put this inside the {title: 'Plotting my stuff'} parentheses;
};


// This is needed populate the chart the first time. ----------------------------------------------------------- define funtion ----------
// to get an inital chart with real data I had to read that data inside the init function.
// The chart will be slow to populate
function init() {
  d3.csv('./data/DS_Salary.csv').then(function(data4) {
    // console.log('Inside d3 csv file read');
    for (let i=0; i<data4.length; i++) {
      row = data4[i];
      x3.push( row['job_title'] );

      // get the y data for all countries
      y3.push( row['salary_in_usd'] );

      const itraces = [{
        x: x3,
        y: y3,
        type: 'bar',
        transforms: [{
          type: 'aggregate',
          groups: x3,
          aggregations: [
            {target: 'y3', func: 'avg', enabled: true}]}],
      }];

      Plotly.newPlot('ML_Pos_Age_Sal', itraces,
          {title: 'Plotting my stuff'});
    };
  });
};


init();
