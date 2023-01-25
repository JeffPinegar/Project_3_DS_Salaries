// adding path to csv
// may need to add 3 letter country codes from excel
// const source = 'DS_Salary.csv';

// Perform a GET request to the query URL and get the data
// //d3.csv(source).then(function(data) {
//   console.log(data);
//   processData(data);
// });

//geoJSON of country shape declared as variable within that file

// Create a map object
// Zoom to 1 for global map view

const map = L.map("map", {
    center: [37.09, -95.71],
    zoom: 1
  });

// Add a tile layer.
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adding in shapes of the countries
L.geoJson(World_Countries).addTo(map);

  