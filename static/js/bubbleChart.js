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

// ------------------------------ Bubble Chart Start ---------------------------------------------
function bubbleChart(myID) {
  const samples = data.samples; // the sample data are the observations
  const bubble_data = samples.filter( (sObj) => sObj.id == myID);
  console.log('bubble_data:', bubble_data);
  const sampleID = bubble_data[0];
  const sampleValues = sampleID.sample_values;
  const otu_ids = sampleID.otu_ids;
  const otu_labels = sampleID.otu_labels;

  // bubble Chart data
  const bubbleData = [{
    x: otu_ids,
    y: sampleValues,
    mode: 'markers',
    text: otu_labels,
    marker: {
      size: sampleValues,
      color: otu_ids,
      colorscale: 'Earth',
    },
  }];

  // bubble Chart layout
  const bubbleLayout = {
    title: 'Bacteria Culturs per sample',
    margin: {t: 0},
    hovermode: 'closest',
    xaxis: {title: 'OTU ID'},
    margin: {t: 30},
  };
  // Insert the bubble chant into the html
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);
}
// ---------------------------------- Bubble Chart End -----------------------------------------

