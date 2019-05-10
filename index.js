const Discord = require('discord.js');

const client = new Discord.Client();

var dateTime = require('node-datetime');



function sleep(milliseconds) {

  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) {

    if ((new Date().getTime() - start) > milliseconds){

      break;

    }

  }

}



function clientCreate() {

	const moduleTime = require(`./moduleTime.js`)

	const moduleAFK = require(`./moduleAFK.js`)

	

	client.on('message', msg => {

		moduleAFK.noticeNoLongerAFK(client, msg)

		moduleAFK.setAFK(client, msg)

		moduleAFK.noticeAFK(client, moduleAFK.getAFK(client, msg))

	})

	

	function moduleTimeUpdate() {

		moduleTime.tick(client)

	}

	

	client.on("ready", () => {

		console.log("Logged in using token")

		setInterval(moduleTimeUpdate, 1000)

	})

	

	client.login(process.env.token);

	

	

}



clientCreate()



    
