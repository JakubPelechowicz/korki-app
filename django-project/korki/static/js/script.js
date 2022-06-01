// Initialize and add the map

function initMap() {
  // The location of Uluru

  const uluru = { lat: 50.005, lng: 21.918 };

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
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
