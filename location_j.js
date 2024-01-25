function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  mapboxgl.accessToken =
    "";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9,
  });

  let markers = [];

  function addMarker(longitude, latitude, title) {
    let marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<p>${title}</p>`))
      .addTo(map);

    markers.push(marker);
  }

  window.showNearbyHospitals = function () {
    clearMarkers();
    navigator.geolocation.getCurrentPosition(function (position) {
      var lng = position.coords.longitude;
      var lat = position.coords.latitude;

      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${lng},${lat}&access_token=${mapboxgl.accessToken}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Hospital data:", data);
          if (data.features && data.features.length > 0) {
            data.features.forEach((hospital) => {
              addMarker(hospital.center[0], hospital.center[1], hospital.text);
            });
          } else {
            console.log("No hospital data received");
          }
        })
        .catch((error) => {
          console.error("Error fetching hospital data:", error);
        });
    });
  };

  window.showNearbyPoliceStations = function () {
    clearMarkers();
    navigator.geolocation.getCurrentPosition(function (position) {
      var lng = position.coords.longitude;
      var lat = position.coords.latitude;

      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/police.json?proximity=${lng},${lat}&access_token=${mapboxgl.accessToken}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Police station data:", data);
          if (data.features && data.features.length > 0) {
            data.features.forEach((policeStation) => {
              addMarker(
                policeStation.center[0],
                policeStation.center[1],
                policeStation.text
              );
            });
          } else {
            console.log("No police station data received");
          }
        })
        .catch((error) => {
          console.error("Error fetching police station data:", error);
        });
    });
  };

  function clearMarkers() {
    markers.forEach((marker) => marker.remove());
    markers = [];
  }
});
