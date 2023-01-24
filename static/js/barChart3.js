/* eslint-disable require-jsdoc */
function makeplot() {
  d3.csv('./data/DS_Salary.csv', function(data) {
    processData(data);
    console.log(data);
  } );
};


function processData(allRows) {
  console.log(allRows);
  const x = []; const y = [];

  for (let i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Category'] );
    y.push( row['salary'] );
  }
  console.log('I am here');
  console.log( 'X', x, 'Y', y);
  makePlotly( x, y );
}

function makePlotly( x, y ) {
  const plotDiv = document.getElementById('plot');
  const traces = [{
    x: x,
    y: y,
  }];

  Plotly.newPlot('myDiv', traces,
      {title: 'Plotting CSV data from AJAX call'});
};
makeplot();


