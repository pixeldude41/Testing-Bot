
const Discord = require("discord.js");

var dateTime = require('node-datetime')

var afkUsers = {}



	exports.call = function(module) {

		return module === "afk"

	}

	

	exports.setAFK = function(client, message) {

		if (message.content.startsWith("!afk ")) {

			afkUsers[message.author.tag] = message.content.substring(5)

			let noticeSetAFK = new Discord.RichEmbed()

				.setColor(3447003)

				.addField(`${message.author.tag} is now afk for reason: ${message.content.substring(5)}`, 'module afk', true)

			message.channel.send({ embed: noticeSetAFK })

		}

	}

	

	exports.getAFK = function(client, message) {

		if (message.mentions.users !== undefined) {

			let array = message.mentions.users.array()

			  for (i=0; i < array.length; i++) {

				if (afkUsers[array[i].tag] !== undefined) {

					return {userTag: array[i].tag, userReason: afkUsers[array[i].tag], userChannel: message.channel}

				}

				return

				}

		}

	}

	

	exports.noticeAFK = function(client, getAFK) {

		if (getAFK !== undefined) {

			let noticeAFK = new Discord.RichEmbed()

				.setColor(3447003)

				.addField(`${getAFK.userTag} is currently afk for reason: ${getAFK.userReason}`, 'module afk', true)

			message.channel.send({ embed: noticeAFK })

		}

	}

	

	exports.noticeNoLongerAFK = function(client, message) {

		if (afkUsers[message.author.tag] !== undefined) {

			let noticeNoLongerAFK = new Discord.RichEmbed()

				.setColor(3447003)

				.addField(`${message.author.tag} is no longer afk for reason: ${afkUsers[message.author.tag]}`, 'module afk', true)

			message.channel.send({ embed: noticeNoLongerAFK })

			afkUsers[message.author.tag] = undefined

		}

	}

	

	exports.debug = function() {

		return true

	}
	