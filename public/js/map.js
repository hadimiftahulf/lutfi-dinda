// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var myLatlng = new google.maps.LatLng(28.424653, -81.469516);

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,

    // The latitude and longitude to center the map (always required)

    center: myLatlng, // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "landscape",
        stylers: [
          {
            hue: "#FFA800",
          },
          {
            saturation: 0,
          },
          {
            lightness: 0,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: "road.highway",
        stylers: [
          {
            hue: "#53FF00",
          },
          {
            saturation: -73,
          },
          {
            lightness: 40,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: "road.arterial",
        stylers: [
          {
            hue: "#FBFF00",
          },
          {
            saturation: 0,
          },
          {
            lightness: 0,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: "road.local",
        stylers: [
          {
            hue: "#00FFFD",
          },
          {
            saturation: 0,
          },
          {
            lightness: 30,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            hue: "#00BFFF",
          },
          {
            saturation: 6,
          },
          {
            lightness: 8,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            hue: "#679714",
          },
          {
            saturation: 33.4,
          },
          {
            lightness: -25.4,
          },
          {
            gamma: 1,
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: "images/map-marker.png",
    title: "Lorem Ipsum",
  });
}
