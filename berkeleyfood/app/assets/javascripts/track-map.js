var trackmap;
var trackmarkers = [];
function initMap2() {
  //Constructor creates a new map - only center and zoom are required.
  trackmap = new google.maps.Map(document.getElementById('trackmap'), {
    center: {lat: 37.869813, lng: -122.258423},
    zoom: 15
  });
  displayDirections({lat: 37.867029, lng: -122.25616});
  //lat: 37.869813, lng: -122.258423 cal
  //lat: 37.8698, lng: -122.2596 GBC
  //lat: 37.867029, lng: -122.256160 Crossroads
  //lat: 37.867385, lng: -122.260958 Bear market
  /*
  var tracklocations = [
       {title: 'Soda Hall', location: {lat: 37.8756, lng: -122.2588}},
       {title: 'Crossroads', location: {lat: 37.867029, lng: -122.25616}},
       {title: 'Golden Bear Cafe', location: {lat: 37.8698, lng: -122.2596}},
       {title: 'Bear Market', location: {lat: 37.867385, lng: -122.260958}},
     ]; */

//var largeInfowindow = new google.maps.InfoWindow();
//var trackbounds = new google.maps.LatLngBounds();
//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

//dont display the markers for now
/*
for (var i = 0; i < 0; i++) {
        // Get the position from the location array.
        var position = tracklocations[i].location;
        var title = tracklocations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
          map: trackmap,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i,
        });
        // Push the marker to our array of markers.
        trackmarkers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        trackmarker.addListener('click', function() {
          populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(trackmarkers[i].position);
      } */
      // Extend the boundaries of the map for each marker
      //trackmap.fitBounds(trackbounds);
      //hard coded it to be soda (can input start address/coordinates later)
}
/*
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
    infowindow.open(trackmap, marker);
  }
}
*/
function displayDirections(origin) {
  var directionsService = new google.maps.DirectionsService;
  // Get the destination address from the user entered value.
  //hard coded to be Crossroads
  var destinationAddress = {lat: 37.8756, lng: -122.2588};
  directionsService.route({
    // The origin is the passed in marker's position.
    origin: origin,
    // The destination is user entered address.
    destination: destinationAddress,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: trackmap,
        directions: response,
        draggable: true,
        polylineOptions: {
          strokeWeight: 5,
          strokeColor: "#2dafe7"
        }
      });
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
