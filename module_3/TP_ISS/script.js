let map;
let marker;

function updateIssLocation() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => response.json())
        .then((data) => {

            document.getElementById('position').innerText
                = "Longitude :" + data.iss_position.longitude + ", Latitude :" + data.iss_position.latitude

            // map.setView([data.iss_position.latitude, data.iss_position.longitude], 4);
            map.flyTo([data.iss_position.latitude, data.iss_position.longitude])

            marker.setLatLng([data.iss_position.latitude, data.iss_position.longitude])
        })
}


function init() {

    map = L.map('map').setView([51.505, -0.09], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var issIcon = L.icon({
        iconUrl: './assets/iss.png',

        iconSize:     [45, 45], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    marker = L.marker([51.5, -0.09], {icon: issIcon}).addTo(map);

    setInterval(updateIssLocation, 2000)
}

window.onload = init


