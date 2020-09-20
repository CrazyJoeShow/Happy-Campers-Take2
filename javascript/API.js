// comment here
$(document).ready(function () {
	var value;
	$('#ParkDropDown').on('change', function () {
		value = $(this).val();
		var APIKey = 'kBIqlaM6bq5UyDKlkxwMUvMo6EAuPevne8z94XHM';
		var queryURL =
			'https://developer.nps.gov/api/v1/parks?parkCode=' +
			value +
			'&api_key=' +
			APIKey;

		$.ajax({
			url: queryURL,
			method: 'GET',
		}).then(function (response) {
            console.log(response)
            $(".Hours").text("Hours"); 
            $(".Directions").text("Directions")
            $(".Number").text("Phone Number")
                $(".threeDayForecast").text("Three Day Forecast")

                var parkImg = $("<img>").attr("src", response.data[0].images[0].url);
                var parkImg2 = $("<img>").attr("src", response.data[0].images[1].url);
            
                $(".parkDirections").text(response.data[0].directionsInfo); 
                $(".parkHours").text(response.data[0].operatingHours[0].description);
                $(".parkNumber").text(response.data[0].contacts.phoneNumbers[0].phoneNumber[0] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[1] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[2] + "-" +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[3] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[4] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[5] + "-" +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[6] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[7] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[8] +
                    response.data[0].contacts.phoneNumbers[0].phoneNumber[9]
                    ); 
                    $(".parkImg").html(parkImg); 
                $(".parkImg2").html(parkImg2); 
                var parkZip = response.data[0].addresses[0].postalCode; 
                var weatherURL =  "https://api.weatherapi.com/v1/forecast.json?key=ae859661fd494bcea6740915202602&q=" + parkZip + "&days=3"; 
                $.ajax({
                    url: weatherURL,
                    method: "GET"
        
                }).then(function (response) {
                  
                    $(".weatherDate0").text(response.forecast.forecastday[0].date);
                   $(".weatherDate1").text(response.forecast.forecastday[1].date); 
                   $(".weatherDate2").text(response.forecast.forecastday[2].date);
                   
                    
        })})})