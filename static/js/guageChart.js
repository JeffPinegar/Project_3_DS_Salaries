/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Jeff Pinegar
// Module 14 Challenge
// Belly Button Biodiversity Dashboad
// January 12, 2023

// -----------------------------------  Gauge Chart --------------------------------------
function gaugeChart(myID) {
  const demo_meta_data = data.metadata;
  const meta_data = demo_meta_data.filter((m) => m.id == myID)[0];
  const id = meta_data.id;
  const wfreq = meta_data.wfreq;

  const degrees = 180 - wfreq *180/9; // this is the angle of the needle for the machine
  const radians = degrees * Math.PI / 180;
  // this is the length of the needle
  const radius = .6;
  // this is the end point of the gauge needle (center of the needle circle)
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  // This controls the shape of the needle
  // Path: may have to change to create a better triangle
  const mainPath = 'M -.0 -0.025 L .0 0.025 L ';
  const pathX = String(x);
  const space = ' ';
  const pathY = String(y);
  const pathEnd = ' Z';
  const path = mainPath.concat(pathX, space, pathY, pathEnd);

  // Construct Gauge
  const dataGauge =
[
  {type: 'scatter',
    x: [0], y: [0],
    marker: {size: 28, color: '850000'},
    showlegend: false,
    name: 'Subject ID', // this is the hover text on the needle center
    text: id, // this is the fover value on the needle center
    hoverinfo: 'name+text'},

  // start of scale
  // the scale is made from slices of pie chart.  Pie chart slices add to 100%.
  // We need 9 slices over 50% of the circle.  Each slice is therefore 50% / 9 slices = 5.56 degrees / slice
  {
    values: [50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50],

    // Construction of the scale for the gauge
    textinfo: 'text',
    rotation: 90,
    textposition: 'inside', // set the postion of the scale text

    // These are the words for the scale
    text: ['8-9',
      '7-8',
      '6-7',
      '5-6',
      '4-5',
      '3-4',
      '2-3',
      '1-2',
      '0-1'],

    marker: {colors: ['rgba(100, 140, 69, 1)',
      'rgba(132, 161, 101, 1)',
      'rgba(162, 180, 131, 1)',
      'rgba(185, 195, 155, 1)',
      'rgba(208, 210, 178, 1)',
      'rgba(226, 221, 196, 1)',
      'rgba(239, 230, 209, 1)',
      'rgba(249, 236, 219, 1)',
      'rgba(255, 239, 224, 1)',
      'rgba(255, 255, 255, 1)']},

    // label locations
    labels: ['8-9',
      '7-8',
      '6-7',
      '5-6',
      '4-5',
      '3-4',
      '2-3',
      '1-2',
      '0-1',
      ''],

    hoverinfo: 'label',
    hole: .5, // set the radius of the inner white part of the gauge
    type: 'pie',
    showlegend: false,
  }, // End of scale
];

  const layout = {
    shapes: [{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {color: '850000'},
    }],

    title: '<b>Belly Button Washing Freqency</b> <br><sup>Scrubs per Week</sup>',

    font: {
      family: 'Arial',
      size: 16},
    xaxis: {zeroline: false,
      showticklabels: false, // turn off the xaxis scale for the scatter chart
      showgrid: false,
      range: [-1, 1]}, // range of the scale -1 to 1 for the circle of radius 1
    yaxis: {zeroline: false,
      showticklabels: false, // turn off the xaxis scale for the scatter chart
      showgrid: false,
      range: [-1, 1]}, // range of the scale -1 to 1 for the circle of radius 1
  // height: 1000,
  // width: 1000,
  };

  Plotly.newPlot('gauge', dataGauge, layout);
};
