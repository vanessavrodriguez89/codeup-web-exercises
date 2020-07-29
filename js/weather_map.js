mapboxgl.accessToken = Weather_MapBox_Key;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-79.4512, 43.6568],
    zoom: 9
});
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'Enter Location',
    marker: false,
    mapboxgl: mapboxgl
});
//Places geocoder outside of map
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
//Adds navigation controls
map.addControl(new mapboxgl.NavigationControl());
$(document).ready(function () {
    $('#map').css({ display: 'none'});
    $('#forecast').css({ display: 'none'});
    let locationLong;
    let locationLat;
    const getHTML = function(){
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: weatherMapKey,
            lat: locationLat.toString(),
            lon: locationLong.toString(),
            units: "imperial",
            part: "daily"
        }).done(function(data) {
            //Clears out html before appending new data
            $('#weather-data').empty()
            //Stores results into a shortened array
            let results = data.daily.slice(0,5)
            results.forEach(function(data) {
                $('#weather-data').css({ display: 'none'}).slideDown(1000).append(
                    "<div class='card shadow col-2 my-2 text-white'>"
                    + "<img src='https://openweathermap.org/img/w/" + (data.weather[0].icon) + ".png'" + "class='card-img-top' alt='...'>"
                    + "<div class='card-body'>"
                    + "<p class='card-header px-0'>" + ((new Date(data.dt * 1000)).toDateString()) + "</p>"
                    + "<p class='card-text'>" + (data.temp.min) + "°F" + " / " + (data.temp.max) + "°F" + "</p>"
                    + "<p class='card-text'>" + "Description: " + "<strong>" + (data.weather[0].description) + "</strong>" + "</p>"
                    + "<p class='card-text'>" + "Humidity: " + "<strong>" + (data.humidity) + "</strong>"  + "</p>"
                    + "<p class='card-text'>" + "Wind: " + "<strong>" + (data.wind_speed) + "</strong>"  + "</p>"
                    + "<p class='card-text'>" + "Pressure: " + "<strong>" + (data.pressure) + "</strong>"  + "</p>"
                    + "</div>"
                    + "</div>"
                )
            })
        })
    }
    //Adds marker to map using coordinates from geocoder
    let marker = new mapboxgl.Marker({
        draggable: true
    })
    //First retrieves long and lat coordinates from geocoder results
    geocoder.on('result', function(results) {
        $('#map').css({ display: 'none'}).fadeIn(3000);
        $('#forecast').css({ display: 'none'}).fadeIn(3000);
        locationLong = results.result.center[0];
        locationLat = results.result.center[1];
        marker.setLngLat([locationLong, locationLat])
        marker.addTo(map);
        return getHTML()
    });
    marker.on('dragend', function(results1){
        console.log(results1)
        let lngLat = results1.target._lngLat;
        locationLong = lngLat.lng;
        locationLat = lngLat.lat;
        marker.setLngLat([locationLong, locationLat])
        marker.addTo(map);
        let place = ('/geocoding/v5/mapbox.places/' + locationLong.toFixed(3) + ',' + locationLat.toFixed(3) +'.json?' +
            'access_token=' + Weather_MapBox_Key)
        // console.log($ curl (place))
        // marker.mapboxClient.geocodeReverse({
        //         latitude: '' + locationLat,
        //         longitude: '' + locationLong
        //     }, function(err, res) {
        //         console.log(err, res)
        //     });
        return getHTML()
    });
});