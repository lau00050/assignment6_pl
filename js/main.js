// Create array //
var cities = ['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney']

// Places array into dropdown box //
cities.forEach(function(cityTitle) {
	$('#city-type').append('<option>' + cityTitle + '</option>')
})

// If a city name is selected, change the background image //
$('#city-type').change(function() {
	if ($('#city-type').val() === 'Austin') {
		$('body').css('background-image','url(images/austin.jpg)')
	} else if ($('#city-type').val() === 'Los Angeles') {
 		$('body').css('background-image','url(images/la.jpg)')
 		console.log('la')
 	} else if ($('#city-type').val() === 'New York City')	{
 		$('body').css('background-image','url(images/nyc.jpg)')
 		console.log('nyc')
	} else if ($('#city-type').val() === 'San Francisco') {
		$('body').css('background-image','url(images/sf.jpg)')
		console.log('sf')
	} else if ($('#city-type').val() === 'Sydney') {
		$('body').css('background-image','url(images/sydney.jpg)')
		console.log('syd')
	} else {
	 $('body').css('background-image','url(images/citipix_skyline.jpg)')
	}
})
