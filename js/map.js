mapboxgl.accessToken = 'pk.eyJ1IjoicGV0aXRsYXR0ZSIsImEiOiJjamFib2pldjcwMjJ6MnhtaHlvcXRrbmdmIn0.0MVivy-vilcBL98R80FTiw';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [167.036940, -41.131399],
  zoom: 4.75,
});


map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-right');
