var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Add new friend's data into the data object
	data.friends.push({
			"name": request.query.name,
			"description": request.query.description  ,
			"imageURL": "http://lorempixel.com/400/400/people"		
	});


	// Pass updated data into index.handlebars
	response.render('index.handlebars', data);
 }