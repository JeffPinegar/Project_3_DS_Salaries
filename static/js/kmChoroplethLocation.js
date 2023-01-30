// adding path to geojson
const source = './data/cc_Salary.geojson';


// Create a map object
// Zoom to 2.5 for global map view

const map = L.map('map', {
  center: [40.5912574, -40.8506107],
  zoom: 2.5,
});

// Add a tile layer.

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


var geojson;

// Read in the CSV file
d3.json(source).then(function(data) {


	//processData(data);
  console.log("data_here", data)


	// Create a new choropleth layer.
	geojson = L.choropleth(data, {

		
  

		// // Define which property in the features to use
		valueProperty: "Avg Salary",
		scale: ['#ffffb2', '#b10026'], // chroma.js scale 
		steps: 4, // number of breaks or steps in range
		mode: 'q', // q for quantile, e for equidistant, k for k-means
		style: {
		color: '#fff', // border color
		weight: 2,
		fillOpacity: 0.8
	},
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.value)
	}
}).addTo(map);})

// //-----------------------------------------------------------------------------------------------------------
// // interactivity/legend from leaflet documentation with stackoverflow troubleshooting

// // adding interaction
// function highlightFeature(properties) {
//     var layer = properties;

//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         dashArray: '',
//         fillOpacity: 0.7
//     });

//     layer.bringToFront();
// }

// // // mouse out 
// // function resetHighlight(e) {
// //     geojson.resetStyle(e.target);
// // }

// // // reset layer style to default state
// var geojson;
// // // ... our listeners
// // geojson = L.geoJson(...);

// // 
// // troubleshooting error: geojson = L.geoJson(...);
// geojson="geojson"
// style="style"
// onEachFeature
// 	layer.bindPopup(null, this)

// ref="geojson"


// // reset default style on mouseOut
// function resetHighlight (component, e) {
// // Just to show the ref is there during the event, i'm not sure how to specifically use it with your library
// console.log(component.refs.geojson);
// // geojsonresetStyle(e.target);
// // how to encapsulate GeoJson component/object?
// }

// // `component` is now the first argument, since it's passed through the Function.bind method, we'll need to pass it through here to the relevant handlers
// function onEachFeature (component, feature, layer) {
// layer.on({
// mouseover: highlightFeature,
// mouseout: resetHighlight.bind(null, component),
// click: zoomToFeature
// });
// }

// //define a click listener that zooms to country
// function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());
// }

// // use onFeature option to add listeners to our country layer
// function onEachFeature(feature, layer) {
//     layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight,
//         click: zoomToFeature
//     });
// }

// geojson = L.geoJson(countriesData, {
//     style: style,
//     onEachFeature: onEachFeature
// }).addTo(map);

// // show pop ups on country hover
// var info = L.control();

// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
//     this.update();
//     return this._div;
// };

// // method that we will use to update the control based on feature properties passed
// info.update = function (props) {
//     this._div.innerHTML = '<h4>Average Data Science Salaries by Country</h4>' +  (props ?
//         '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
//         : 'Hover over a country');
// };

// info.addTo(map);

// // modify users, update control when hovering over country
// function highlightFeature(e) {
//     // ...
//     info.update(layer.feature.properties);
// }

// function resetHighlight(e) {
//     // ...
//     info.update();
// }

// // css added to leaflet.css


// // legend info
// var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend');
//         "Avg Salary" == [0, 5000, 50000, 100000, 20000],
//         labels = [];

//     // loop through our salary intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < "Avg Salary".length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + getColor("Avg Salary"[i] + 1) + '"></i> ' +
//             "Avg Salary"[i] + ("Avg Salary"[i + 1] ? '&ndash;' + "Avg Salary"[i + 1] + '<br>' : '+');
//     }

//     return div;
// };

// legend.addTo(map);


// ----------------------------------------------------------------------------------------

//   // Set up the legend, example from class 15.2.4
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];

//     // Add the minimum and maximum.
//     var legendInfo = "<h1>Average DS Salary by Country<br />($4000-$157500)</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";

//     div.innerHTML = legendInfo;

//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });

//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };

//   // Adding the legend to the map
//   legend.addTo(map);


// // Set up hover feature, example from leaflet choropleth documentation
// var info = L.control();

// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
//     this.update();
//     return this._div;
// };

// // method that we will use to update the control based on feature properties passed
// info.update = function (props) {
//     this._div.innerHTML = '<h4>Average Data Science Salaries</h4>' +  (props ?
//         '<b>' + props.county + '</b><br />' + props.avg_salary + ' countries / mi<sup>2</sup>'
//         : 'Hover over a country');
// };

// info.addTo(map);

// function highlightFeature(e) {
//     // ...
//     info.update(layer.feature.properties);
// }

// function resetHighlight(e) {
//     // ...
//     info.update();
// }

// .info {
//     padding: 6px 8px;
//     font: 14px/16px Arial, Helvetica, sans-serif;
//     background: white;
//     background: rgba(255,255,255,0.8);
//     box-shadow: 0 0 15px rgba(0,0,0,0.2);
//     border-radius: 5px;
// }
// .info h4 {
//     margin: 0 0 5px;
//     color: #777;
// }



//   // Set up the legend, example from leaflet choropleth documentation
// var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 5000, 50000, 100000, 20000],
//         labels = [];

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < grades.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
//             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//     }

//     return div;
// };

// legend.addTo(map);

// .legend {
//     line-height: 18px;
//     color: #555;
// }
// .legend i {
//     width: 18px;
//     height: 18px;
//     float: left;
//     margin-right: 8px;
//     opacity: 0.7;
// }


