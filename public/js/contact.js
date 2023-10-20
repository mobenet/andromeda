function initMap() {
    var studioLocation = { lat: 41.4036, lng: 2.1853 }; // Aproximadamente la ubicación de Carrer de Glòries, Barcelona
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: studioLocation
    });
    var marker = new google.maps.Marker({
        position: studioLocation,
        map: map
    });
}

initMap();
