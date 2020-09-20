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
        })})})