const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
   
})

let marker;

map.on('click', (event) => {
    const lat = event.latIng.lat;
    const lnt = event.latIng.lnt;

    marker = L.marker([lat,lnt]), { icon }

})