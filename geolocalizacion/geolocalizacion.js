let map;
let position = { lat: 21.814462938448436, lng: -102.77000919869472 }
async function initMap() {
  //@ts-ignore
const { Map } = await google.maps.importLibrary("maps");
input = document.getElementById("places");
autocomplete = new google.maps.places.autocomplete(input); 

map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 17,
});
  // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "UTC",
});

autocomplete.addListener("place_changed", function () {
    const selectedPlace = autocomplete.getPlace();
    if (selectedPlace.geometry && selectedPlace.geometry.location) {
    
        map.setCenter(selectedPlace.geometry.location);
        map.setZoom(17);
    }
});

}
initMap();
