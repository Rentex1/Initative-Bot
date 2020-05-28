const Discord = require('discord.js')
const client = new Discord.Client()

var uneditedIntList = {};
var sortableIntList = [];

function addNumbertoList(numberInt, author){
    uneditedIntList[author] = numberInt;
    //console.log(uneditedIntList)
    
    for (var author in uneditedIntList) {
        // Hier brauchst du wahrscheinlich eine if-Abfrage
        sortableIntList.push([author, uneditedIntList[author]]);
    }

    sortableIntList.sort(function(a, b) {
        return a[1] - b[1];
        console.log(sortableIntList)
});
    
}
// As soon as the bot receives a Message this function is called
client.on('message', (receivedMessage) => {
    //console.log(uneditedIntList);

    if (receivedMessage.author == client.user) {
        return;
    }

    if (receivedMessage.content.startsWith("int")) {

        console.log(receivedMessage.content);
        let infonumberInt = receivedMessage.content.substr(4);

        if(isNaN(infonumberInt)){
            receivedMessage.channel.send("Sorry, I don't understand. Please text me your integer Value!")
        }
        else{
            receivedMessage.channel.send("Okay thanks, your integer value is " + infonumberInt + "!")
            addNumbertoList(infonumberInt, receivedMessage.author);
            console.log(sortableIntList)
        }
    
    }

    // receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
})

client.login("") // Replace XXXXX with your bot token