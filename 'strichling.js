var Discord = require("discord.js");
var token = "MzY1NjIzNjI1NDI1ODc5MDUx.DLhNVw.f2enXsWGI5J5Y92frX7ug2QtJBg";
var call = "~"
var client = new Discord.Client();
client.on("message",msg =>{
if (msg.content==call+"help")
{
msg.channel.send("nyaaaaaa~")
}
});

client.login(token)
var client = new Discord.Client();
