const options = {
    ragging : false,
    touchZoom: false,
    doubleClickZoom : false,
    scrollWheelZoom : false,
    zoomControl : false,

}


const map = L.map('mapid', options).setView([-27.645618, -48.667854], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 2]
})

L.marker([-27.645618, -48.667854], { icon })
.addTo(map)
/*gallery */
function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    imageContainer.src = image.src

    button.classList.add('active')
} 