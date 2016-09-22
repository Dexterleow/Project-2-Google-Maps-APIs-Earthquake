console.log("Javascript,are you there?");

var map;

function initialize() {

  var mapOptions = {
    zoom: 2,
    minZoom: 1,
    maxZoom: 15,
    center: {lat: 22.865427, lng: 151.196123},
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
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

  var drawingManager =  new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
      drawingModes: ['marker', 'polygon', 'rectangle']
    },
    markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });
  drawingManager.setMap(map);
}

//Earthquake data is passed to the eqfeed_callback
function eqfeed_callback(results) {
  //This adds the coordinates of each earthquake to the heatmapData array.
  var heatmapData = [];

  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);
    //That array is then passed to the HeatmapLayer constructor, which creates the heatmap and displays it on the map.
    //console.log(results.features[i].geometry.coordinates)
    var markerCoordsTitle = results.features[i].properties.title; //title of Earthquake

    var markerCoordsTime = results.features[i].properties.updated; //time of Earthquake


    var markerDateFormat = toDateTime(markerCoordsTime).toString();


    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'; //Not working.
    var marker = new google.maps.Marker({
      position: latLng,
      // title: markerCoordsTitle,
      content: markerCoordsTitle,
      time: markerDateFormat,

    // icon: iconBase + 'http://www.freeiconspng.com/uploads/helicopter-icon-8.png', //not working.
      map:map
    });

console.log(marker);

    marker.addListener('click', function() {
          var infowindow = new google.maps.InfoWindow({
            content: this.content + "." + " " + this.time,
            maxWidth:200
          });
          infowindow.open(map, this);
    });

    var magnitude = results.features[i].properties.mag;
    var weightedLoc = {
      location: latLng,
      weight: Math.pow(2, magnitude)
    };
    heatmapData.push(weightedLoc);
  }

  //Weight the results by magnitude
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    dissipating: false,
    map: map
  });

}

function toDateTime(secs) {
  var d = new Date(secs); // The 0 there is the key, which sets the date to the epoch
  return d
}
