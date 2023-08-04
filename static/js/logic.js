// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".

let map = L.map("map", {
    center: [0, 0],
    zoom: 2
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Getting geojson data set-up
let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

//Getting color set-up
const getColor = depth => {

    let color;
    switch (true) {
        case depth > 90: color = 'red'; break;
        case depth > 70: color = 'orange'; break;
        case depth > 50: color = 'yellow'; break;
        case depth > 30: color = 'green'; break;
        case depth > 10: color = 'blue'; break;
        default: color = 'purple'; break;
    }
    return color;
};

//Setting up circles with colors on the map with correct depth and size and location
d3.json(url).then(({ features }) => {

    features.forEach(({ geometry, properties }) => {

        let [lgn, lat, depth] = geometry.coordinates;
        let { mag, place } = properties;

        L.circleMarker([lat, lgn], { radius: mag * 2, fillOpacity: 0.70, color: 'black', fillColor: getColor(depth), weight: 1 }).addTo(map);
        
  /* // Here we add a GeoJSON layer to the map once the file is loaded.
     L.geoJson(features, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Location: " + feature.properties.place + "</h3><hr><p>Date: "
            + new Date(feature.properties.time) + "</p><hr><p>Magnitude: " + feature.properties.mag + "</p>");*/


/*//Making the legend
let legend = L.control({ position:'topright' });
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let grades = [-10, 10, 30, 50, 70, 90];

 for (let i =0; i < grades.length; i++) {
    div.innerHTML += 
    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div
    };
legend.addTo(Map); */
})});