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
            
                $(".parkDirections").text(response.data[0].directionsInfo); 
                $(".parkHours").text(response.data[0].operatingHours[0].description);
                $(".parkNumber").text(response.data[0].contacts.phoneNumbers[0].phoneNumber[0] +
                
        })})})