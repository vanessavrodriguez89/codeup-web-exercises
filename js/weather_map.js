$(document).ready(function () {

    // $("#submitWeather").click(function () {
    //     let city = $("#cityName").val()
    //     if(city !== ""){
    //         $.ajax({
    //             url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + weatherMapKey,
    //             type: "GET",
    //             dateType: "jsonp",
    //             success: function (data) {
    //                 console.log(data)
    //             }
    //         })
    //     } else {
    //         $(document).alert("Field cannot be empty");
    //     }
    // })

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherMapKey,
        q:     "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        //Convert unix date
        var date = new Date(data.dt * 1000);
        $('#weather-date').html(date.toDateString())


        //High-Low Temperatures
        let lowTemp = data.main.temp_min;
        let highTemp = data.main.temp_max;
        $('#high-low-temp').html("<strong>" + lowTemp + '°F / ' + highTemp + '°F' + "</strong>")

        let descr = data.weather[0].description;
        console.log(descr)
        console.log(typeof descr)
        $('#description').html("Description: " + "<strong>" + descr + "</strong>")
        if (descr.includes('rain')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/rain.png" alt="rain">');
            } else if (descr.includes('clear')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/clear.png" alt="clear skies">');
            } else if (descr.includes('clouds')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/clouds.png" alt="cloudy">');
            } else if (descr.includes('snow')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/snow.png" alt="snow">');
            } else if (descr.includes('thunderstorm')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/thunderstorm.png" alt="thunderstorm">');
            } else if (descr.includes('mist')) {
                $("#weatherIcon").html('<img class="push old-pics" src="./img/weather-project/mist.png" alt="mist">');
            }

        $('#humidity').html("Humditiy: " + "<strong>" + data.main.humidity + "</strong>")
        $('#wind').html("Wind: " + "<strong>" + data.wind.speed + "</strong>")
        $('#pressure').html("Pressure: " + "<strong>" + data.main.pressure + "</strong>")

    });

})


