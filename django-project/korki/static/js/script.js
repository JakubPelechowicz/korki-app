// Initialize and add the map
// Initialize and add the map
const inputContainer=document.querySelector(".event__options");
const colisionType=document.querySelector(".form__input--type");
const submitColision=document.querySelector("#submit_colision");
const formDescription=document.querySelector(".form__input--description");
let lat, lng, myEvent;
const from = document.querySelector(".input1");
const to = document.querySelector(".input2");
let clicked = 0;
zmienna = document.querySelector("#planbutton");//przycisk
let latS, lngS; //punkt początkowy
let latE, lngF; //punkt końcowy
const opisinput = document.querySelector(".waydescription")
const calendar = document.querySelector(".calendar")

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
    alert('Geolocation is not supported by your browser.')
  }
//random markery
  markerA = new google.maps.Marker({
    position: google.maps.LatLng(51.7519, -1.2578),
    title: "point A",
    label: "A",
    map: map
    });
  markerB = new google.maps.Marker({
    position: google.maps.LatLng(51.7519, -1.2578),
    title: "point B",
    label: "B",
    map: map
    });

  google.maps.event.addListener(map, 'click', function(event) {

    if (clicked === 0){
      markerA.setMap(null); 
      markerB.setMap(null);

    latS =event.latLng.toJSON().lat;
    lngS =event.latLng.toJSON().lng;
    
    from.value=`${latS.toFixed(8)} ${lngS.toFixed(8)}`;
    clicked++;

    markerA = new google.maps.Marker({
    position: event.latLng,
    title: "point A",
    label: "A",
    map: map
    });
    }
    
    else{
    latF =event.latLng.toJSON().lat;
    lngF =event.latLng.toJSON().lng;

    to.value=`${latF.toFixed(8)} ${lngF.toFixed(8)}`;
    clicked=0;

    markerB = new google.maps.Marker({
      position: event.latLng,
      title: "point B",
      label: "B",
      map: map
      });
    }
    })


    //przycisk
    zmienna.addEventListener("click", function(){
      let opis = opisinput.value;
      const plandate = calendar.value;
      if(opis==='opis'){
       opis = ''; 
      }
      console.log(latS,lngS,latF,lngF,opis,plandate);
    });
    google.maps.event.addListener(map, 'click', function(event) {
      //placeMarker(event.latLng);
      
      lat=event.latLng.toJSON().lat;
      lng=event.latLng.toJSON().lng;
      myEvent=event;
      inputContainer.classList.remove("hidden");
   });
   submitColision.addEventListener("click",function(){
    console.log(lat,lng,colisionType.value,formDescription.value);
    placeMarker(myEvent.latLng, colisionType.value, formDescription.value);
    inputContainer.classList.add("hidden");
  })
  
   function placeMarker(location, typexDD,dsc) {
    if(dsc=="opis"){
      dsc="";
    }
    var marker = new google.maps.Marker({
        position: location, 
        map: map,
        title:`${typexDD} ${dsc}`,
    });
    marker.setPosition(location);
    
    
  }
    
 };

///////////////////////////////////////////////

///////////////////////////////////////////////

///<script  src="{% static 'js/script.js'" %}"></script>
window.initMap = initMap;
