// Initialize and add the map

function initMap() {
  // The location of Uluru

  const uluru = { lat: -25.344, lng: 131.031 };

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
  });
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position =>
        map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      err => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

///<script  src="{% static 'js/script.js'" %}"></script>
window.initMap = initMap;
