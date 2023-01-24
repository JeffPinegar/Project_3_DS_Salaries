/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */

// Jeff Pinegar
// Module 14 Challenge
// Belly Button Biodiversity Dashboad
// January 12, 2023

// ------------------------------ Bar Chart Start ---------------------------------------------
function barChart(myID) {
  const samples = data.samples; // strip off the sample data
  const bar_data = samples.filter( (s) => s.id == myID);
  const sampleID = bar_data[0];
  const sampleValues = sampleID.sample_values;
  const otu_ids = sampleID.otu_ids;
  const otu_labels = sampleID.otu_labels;
  const yticks = otu_ids.slice(0, 10).map((otuID) => `OUT ${otuID}`).reverse();

  // barChart data
  const barData =[{
    x: sampleValues.slice(0, 10).reverse(),
    y: yticks,
    type: 'bar',
    test: otu_labels.reverse(),
    orientation: 'h',
  }];

  // barChart Layout
  const barLayout = {
    title: 'Top 10 Bacteria Cultures Found',
    margin: {t: 30, l: 150},
  };

  // Insert the bubble chant into the html
  Plotly.newPlot('bar', barData, barLayout);
}
// -------------------------------- Bar Chart End ------------------------------------------------

