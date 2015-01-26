var mapMarkers = [];
var mapInfoWindows = [];
var markedLocations = [];

function initialize() {
  var mapOptions = {
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
  var geocoder = new google.maps.Geocoder();
  var pos = new google.maps.LatLng(1.29, 103.85);
  map.setCenter(pos);

  google.maps.event.addListener(map, 'click', function(e) {
    geocoder.geocode({'latLng': e.latLng}, function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
        markedLocations.push(results);
        if(results[0]) {
          var markerOpts = {
            'map': map,
            'position': e.latLng
          }
          var marker = new google.maps.Marker(markerOpts);
          mapMarkers.push(marker);
          var infoWindow = new google.maps.InfoWindow();
          infoWindow.setContent(results[0].formatted_address);
          mapInfoWindows.push(infoWindow);
          google.maps.event.addListener(marker, 'click', function(e) {
            infoWindow.open(map, marker);
          });
        }
      }
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
