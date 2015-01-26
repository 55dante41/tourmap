var mapMarkers = [];
var mapInfoWindows = [];
var markedLocations = [];

function initialize() {
  var mapOptions = {
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
  var geocoder = new google.maps.Geocoder();

  //Set the current detected location as the center
  //if(navigator.geolocation) {
  //  navigator.geolocation.getCurrentPosition(function(position) {
  //    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //    console.log(pos);
  //    var infoWindow = new google.maps.InfoWindow({
  //      'map': map,
  //      'position': pos,
  //      'content': 'You are here!'
  //    });
  //    map.setCenter(pos);
  //  }, function() {
  //    handleNoGeoLocation(true);
  //  });
  //} else {
  //  handleNoGeoLocation(false);
  //}

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

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infoWindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
