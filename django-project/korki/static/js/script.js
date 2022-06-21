// Initialize and add the map
// Initialize and add the map
const inputContainer = document.querySelector('.event__options');
const colisionType = document.querySelector('.form__input--type');
const submitColision = document.querySelector('#submit_colision');
const wayOptions = document.querySelector('.way__options');
const formDescription = document.querySelector('.form__input--description');
let lat, lng, myEvent;
const from = document.querySelector('.input1');
const to = document.querySelector('.input2');
let clicked = 0;
zmienna = document.querySelector('#planbutton'); //przycisk
let latS, lngS; //punkt początkowy
let latF, lngF; //punkt końcowy
const opisinput = document.querySelector('.waydescription');
const calendar = document.querySelector('.calendar');

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
  //trasa
  const geocoder = new google.maps.Geocoder();
  var directionsService = new google.maps.DirectionsService,
  directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
  })
  //markery
  markerA = new google.maps.Marker({
    position: google.maps.LatLng(51.7519, -1.2578),
    title: 'point A',
    label: 'A',
    map: null,
  });
  markerB = new google.maps.Marker({
    position: google.maps.LatLng(51.7519, -1.2578),
    title: 'point B',
    label: 'B',
    map: null,
  });

  google.maps.event.addListener(map, 'click', function (event) {
    if (clicked === 0) {
      markerA.setMap(null);
      markerB.setMap(null);

      latS = event.latLng.toJSON().lat;
      lngS = event.latLng.toJSON().lng;

      clicked++;

      markerA = new google.maps.Marker({
        position: event.latLng,
        title: 'point A',
        label: 'A',
        map: map,
      });
      geocodeLatLng(geocoder,event.latLng,from);
    } else {
      latF = event.latLng.toJSON().lat;
      lngF = event.latLng.toJSON().lng;

      clicked = 0;

      markerB = new google.maps.Marker({
        position: event.latLng,
        title: 'point B',
        label: 'B',
        map: map,
      });

      geocodeLatLng(geocoder,event.latLng,to);
      calculateAndDisplayRoute(directionsService, directionsDisplay, markerA.getPosition(), markerB.getPosition());
    }
  });

  //przycisk
  zmienna.addEventListener('click', function () {
    let opis = opisinput.value;
    const plandate = calendar.value;
    if (opis === 'opis') {
      opis = '';
    }
    wayOptions.classList.add('hidden');
    inputContainer.classList.add('hidden');
    console.log(latS, lngS, latF, lngF, opis, plandate);
  });
  google.maps.event.addListener(map, 'click', function (event) {
    //placeMarker(event.latLng);

    lat = event.latLng.toJSON().lat;
    lng = event.latLng.toJSON().lng;
    myEvent = event;
    inputContainer.classList.remove('hidden');
    wayOptions.classList.remove('hidden');
  });
  submitColision.addEventListener('click', function () {
    console.log(lat, lng, colisionType.value, formDescription.value);
    placeMarker(myEvent.latLng, colisionType.value, formDescription.value);
    inputContainer.classList.add('hidden');
    wayOptions.classList.add('hidden');
  });

  function placeMarker(location, typexDD, dsc) {
    if (dsc == 'opis') {
      dsc = '';
    }
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: `${typexDD} ${dsc}`,
    });
    marker.setPosition(location);
  }
}

///////////////////////////////////////////////

///////////////////////////////////////////////

///<script  src="{% static 'js/script.js'" %}"></script>
window.initMap = initMap;

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
      origin: pointA,
      destination: pointB,
      avoidTolls: true,
      avoidHighways: false,
      travelMode: google.maps.TravelMode.DRIVING
  }, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
      } else {
          window.alert('Directions request failed due to ' + status);
      }
  });
}

function geocodeLatLng(geocoder, latlng, field) {
  
  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        
        console.log(response.results[0].formatted_address);
        field.value = `${response.results[0].formatted_address}`;
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}