// Create array //
var cities = ['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney']

// Places array into dropdown box //
cities.forEach(function(cityTitle) {
	$('#city-type').append('<option>' + cityTitle + '</option>')
})

// If a city name is selected, change the background image //
$('#city-type').change(function() {
	if (cities[0] === 'Austin') { // ONLY THIS ONE WORKS FRICKEN HELL I'M CONFUSED!!!
		$('body').css('background-image','url(images/austin.jpg)')
		console.log('austin')
	} else if (cities[1] === 'Los Angeles') {
		$('body').css('background-image','url(images/la.jpg)')
		console.log('la')
	} else if (cities[2] === 'New York City')	{
		$('body').css('background-image','url(images/nyc.jpg)')
		console.log('nyc')
	} else if (cities[3] === 'San Francisco') {
		$('body').css('background-image','url(images/sf.jpg)')
		console.log('sf')
	} else if (cities[4] === 'Sydney') {
		$('body').css('background-image','url(images/sydney.jpg)')
		console.log('syd')
	} else {
	 $('body').css('background-image','url(images/citipix_skyline.jpg)')
	}
})
