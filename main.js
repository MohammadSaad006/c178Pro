let latitude=22.65272985039163,longitude=  79.35285975275426

mapboxgl.accessToken="pk.eyJ1Ijoic2FtZWVuYWZvcmNvZGluZyIsImEiOiJjbDJvZW81eW8yNDUxM2ZvN2dxbDlyb3A3In0.SWN6hlZyeuNPeKMRpjOKDA"

var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:4
}) 

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);

var img1 = document.querySelector("#tajmhal")

var marker1=new mapboxgl.marker({
    element:img1})
    .setLngLat([ 78.04023839713358,27.171355514528106])
    .addTo(map);

var img2 = document.querySelector("#gateway")

var marker2= new mapboxgl.marker({
    element:img2})
    .setLngLat([ 77.22956332046245,28.612940181942307])
    .addto(map);

