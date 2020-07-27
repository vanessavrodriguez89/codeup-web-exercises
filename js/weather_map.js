mapboxgl.accessToken = Weather_MapBox_Key;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'Enter location',
    marker: {
        color: 'red'
    },
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));



$(document).ready(function () {
    //First retrieves long and lat coordinates
    geocoder.on('result', function(results) {
        let locationLong = results.result.center[0];
        let locationLat = results.result.center[1];



        $.get("http://api.openweathermap.org/data/2.5/onecall", { 
            APPID: weatherMapKey, 
            lat: '' + locationLat, 
            lon: '' + locationLong, 
            units: "imperial", 
            part: "daily"
            }).done(function(data) {

            //Clears out html before appending new data
            $('#weather-data').empty()
            //Stores results into a shortened array
            let results = data.daily.slice(0,5)
            results.forEach(function(data) {
                $('#weather-data').append(
                    "<div class='card col-2'>"
                        + "<img src='https://openweathermap.org/img/w/" + (data.weather[0].icon) + ".png'" + "class='card-img-top' alt='...'>"
                        + "<div class='card-body'>"
                            + "<p class='card-header'>" + ((new Date(data.dt * 1000)).toDateString()) + "</p>"
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
    });
});