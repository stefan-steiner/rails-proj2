var map;
var markers = [];
function initMap() {
  //Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.869813, lng: -122.258423},
    zoom: 15
  });
  //lat: 37.869813, lng: -122.258423 cal
  //lat: 37.8698, lng: -122.2596 GBC
  //lat: 37.867029, lng: -122.256160 Crossroads
  //lat: 37.867385, lng: -122.260958 Bear market
  var locations = [
       {title: 'Golden Bear Cafe', location: {lat: 37.8698, lng: -122.2596}},
       {title: 'Crossroads', location: {lat: 37.867029, lng: -122.25616}},
       {title: 'Bear Market', location: {lat: 37.867385, lng: -122.260958}},
     ];

var largeInfowindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i,
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
          populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
      }
      // Extend the boundaries of the map for each marker
      map.fitBounds(bounds);
}
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    // Clear the infowindow content to give the streetview time to load.
    infowindow.setContent('');
    infowindow.marker = marker;
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    // In case the status is OK, which means the pano was found, compute the
    // position of the streetview image, then calculate the heading, then get a
    // panorama from that and set the options
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), panoramaOptions);
      } else {
        infowindow.setContent('<div>' + marker.title + '</div>' +
          '<div>No Street View Found</div>');
      }
    }
    // Use streetview service to get the closest streetview image within
    // 50 meters of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    // Open the infowindow on the correct marker.
    infowindow.open(map, marker);
  }
}
