const Discord = require('discord.js')
const client = new Discord.Client()

// As soon as the bot receives a Message this function is called
client.on('message', (receivedMessage) => {

    if (receivedMessage.author == client.user) {
        return
    }

    if (receivedMessage.content.startsWith("int")) {

        console.log(receivedMessage.content)
        let fullCommand = receivedMessage.content.substr(4)

        if(isNaN(fullCommand)){
            receivedMessage.channel.send("Sorry, I don't understand. Please text me your integer Value!")
        }
        else{
            receivedMessage.channel.send("Okay thanks, your integer value is " + fullCommand + "!")
        }
    
    }

    // receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
})

client.login("NzEyNjExMTkzOTAyMDcxODMw.XshI5w.pzSuo9QTz8GL42bHkARKLv9oWWw") // Replace XXXXX with your bot token