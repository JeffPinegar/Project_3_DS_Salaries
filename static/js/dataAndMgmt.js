/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */

// Jeff Pinegar
// Module 14 Challenge
// Belly Button Biodiversity Dashboad
// January 12, 2023

// ------------------------------  Get the Data Start -----------------------------------------
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';
const dataPromise = d3.json(url); // This is a d3 method to read json
console.log('Data Promise: ', dataPromise); // Send the promise status to the console so it can be examined.

function init() {
  d3.json(url).then(function(tmp_data) {
    data = tmp_data; // save the data from the callback function
    console.log(data); // log the data to the console so that can be looked examined
    updateDashboard(); // Initialize the Dashboard with the first record.
  });
}
// ----------------------------  Get the Data End ---------------------------------------------


// -------------------------------  Demographics Panel Start -----------------------------------
function demoInfo(myID) {
  const demo_meta_data = data.metadata;
  const meta_data = demo_meta_data.filter((m) => m.id == myID)[0];
  const demo_info = d3.select('#sample-metadata');
  const id = meta_data.id;
  const ethnicity = meta_data.ethnicity;
  const gender = meta_data.gender;
  const age = meta_data.age;
  const location = meta_data.location;
  const bbtype = meta_data.bbtype;
  const wfreq = meta_data.wfreq;
  demo_info.html(''); // create a blank text field
  demo_info.append('h6').text(`ID: ${id}`);
  demo_info.append('h6').text(`Ethnicity: ${ethnicity}`);
  demo_info.append('h6').text(`Gender: ${gender}`);
  demo_info.append('h6').text(`Age: ${age}`);
  demo_info.append('h6').text(`Location: ${location}`);
  demo_info.append('h6').text(`bbtype: ${bbtype}`);
  demo_info.append('h6').text(`wfreq: ${wfreq}`);
};
// -------------------------------  Demographics Panel End -----------------------------------


// --------------------  handel the dropdown and change of the ID ---------------------------
function optionChanged(myID) {
  barChart(myID);
  bubbleChart(myID);
  demoInfo(myID);
  gaugeChart(myID);
}

// ---------------------------  Update the dashboard Start ------------------------------------
function updateDashboard() {
  const names=data.names;
  const subjdropdownMenu = d3.select('#selDataset');
  // const dataset = subjdropdownMenu.property('value');
  // dataset = names;
  for (let i=0; i < names.length; i++) {
    const myID = names[i];
    subjdropdownMenu.append('option').text(myID).property('value', myID);
  }
  const initID = subjdropdownMenu.property('value');
  barChart(initID);
  bubbleChart(initID);
  demoInfo(initID);
  gaugeChart(initID);
};
// ---------------------------  Update the dashboard End ------------------------------------

init();
