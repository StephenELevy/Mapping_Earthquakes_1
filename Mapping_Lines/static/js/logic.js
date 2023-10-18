// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The center location is halfway between L.A. and S.F.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/150000,
    color: "orange",
    lineweight: 1
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1795, -97.6664],
  [29.9902, -95.3368],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
  

];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "white",
  weight: 4,
  opacity: 0.5,
  dashArray: '8,8,8,8'
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);