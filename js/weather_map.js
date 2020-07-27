$(document).ready(function () {
    $.get("http://api.openweathermap.org/data/2.5/onecall", { 
        APPID: weatherMapKey, 
        lat: '29.4241', 
        lon: '-98.4936', 
        units: "imperial", 
        part: "daily"
        }).done(function (data) {

        console.log(data)
        let results = data.daily
        console.log(results)
        results.forEach(function (data) {
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



        });
});


// let icon = data.weather[0].icon; 
// let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"; 
// $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>"); 