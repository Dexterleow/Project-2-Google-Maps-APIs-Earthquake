console.log("Javascript,are you there?");

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 2,
      center: {lat: -33.865427, lng: 151.196123},
      mapTypeId: 'terrain'
    };

    map = new google.maps.Map(document.getElementById('map'),
          mapOptions);


// Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
//M2.5_Earthquake in the past 7 days.
    script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
    document.getElementsByTagName('head')[0].appendChild(script);

    function eqfeed_callback(response) {
      map.data.addGeoJson(response); // addGeoJson() method to place the parsed GeoJSON data on the map.
    }

  }

  function eqfeed_callback(results) {
    var heatmapData = [];
    for (var i = 0; i < results.features.length; i++) {
      var coords = results.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      heatmapData.push(latLng);
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: false,
      map: map
    });
  }