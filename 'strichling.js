var Discord = require("discord.js");
var token = "MzY1NjIzNjI1NDI1ODc5MDUx.DLhNVw.f2enXsWGI5J5Y92frX7ug2QtJBg";
var call = "~"
var client = new Discord.Client();
client.on("message",msg =>{
args = msg.content.split(" ");
if (msg.content==call+"help")
{
msg.channel.send("nyaaaaaa~")
}
if (msg.content==call+"destroy-earth")
{
msg.channel.send(":earth_americas::boom:")
}
if (args[0]==call+"roulette")
{
switch(Math.round(Math.random()*args[1]))
{
case 1:
msg.channel.send("test1");
break;
case 2:
msg.channel.send("test2");
break;
case 3:
msg.channel.send("test3");
break;
}
}
});
client.login(token)
var client = new Discord.Client();
