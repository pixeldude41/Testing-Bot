const Discord = require("discord.js");

var dateTime = require('node-datetime');



	exports.call = function(module) {

		return module === "Time"

	}

	

	exports.tick = function(client) {

		dateTime.setPeriod([ 'Ante Meridiem', 'Post Meridiem' ]);

		var getTimeDate = dateTime.create();

		var showTimeChannel = getTimeDate.format('I:M:S')

		var showTimeChannelDate = getTimeDate.format('m/d/Y')

		timeChannel = client.channels.get("576373699121381388")

        timeChannel.setName(showTimeChannel)
        
		timeChannelDate = client.channels.get("576492104558051328")

		timeChannelDate.setName(showTimeChannelDate)

	}

	

	exports.debug = function() {

		return true

	}

     

	 

