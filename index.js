const Discord = require('discord.js') 
const client = new Discord.Client()
const fs = require('fs')


var currentDate = new Date();
var hours = currentDate.getHours();
var currentDay =currentDate.getDay();

function nextTime(currentDate, hours, currentDay){


  var mm = currentDate.getMonth() + 1;
  var dd = currentDate.getDate();
  var yyyy = currentDate.getFullYear();
  currentDate = mm + '/' + dd + '/' + yyyy;

  currentDate = new Date(currentDate);

  var referenceDate = new Date("06/25/2021");
  var days = currentDate.getTime() - referenceDate.getTime();
  days = days / (1000 * 3600 * 24);

  var weeks = (days/7);

  //console.log(currentDay);

  if (currentDay == 5){
    if(hours >= 20){
      weeks = Math.trunc(weeks) + 1;
    }
    else{
      weeks = Math.trunc(weeks);
    }
  } else{
    weeks = Math.trunc(weeks) + 1;
  }
  var i;
  var add;

  //console.log(weeks);
  

  var nextMeeting = referenceDate;


  for ( i = weeks; i < weeks*2; i++) {
    nextMeeting.setDate(nextMeeting .getDate() + 7);

    }

  var mm = nextMeeting.getMonth() + 1;
  var dd = nextMeeting.getDate();
  var yyyy = nextMeeting.getFullYear();
  nextMeeting = mm + '/' + dd + '/' + yyyy;
  

  return String(nextMeeting);
}

console.log(currentDay)
console.log(hours)
nextMeeting = nextTime(currentDate, hours, currentDay);

console.log(nextMeeting);

client.msgs = require('./msgs.json')

prefix = "!"

client.once("ready", () =>{
  console.log("your bot is ready!")
})



client.on('message', (message)=>{
  if(message.content.startsWith(`${prefix}next-meeting`)){
      var color = 16741749;
      var Botmessage =""
      var gifs = "https://media.giphy.com/media/l0HlvFUHvDB16UOwU/giphy.gif";
      Botmessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!!";
     
      

    if (hours == 3){
        Botmessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!! Join the #idle VC channel while you late night code";
        gifs = "https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif";
        color = 1118018;
     }

    if (currentDay == 5){
      if(hours <= 20){
         gifs = "https://media.giphy.com/media/WzFP9kauh3WrkoethW/giphy.gif";
         Botmessage = "Come to Hackclub Today at 4:00 PM CST on zoom.memphishack.com"
         color = 16711765;
      }else{
        color = 5253281;
         gifs = "https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif";
         Botmessage = "Your a little late :( Hackclub is likely over maybe not tho so just try the link, but come to Hackclub "+nextMeeting+" at 4PM CST @ zoom.memphishack.com !!!";
      }}

    if (currentDay == 4){
        color = 65306;
        gifs = "https://media.giphy.com/media/ZeXeuNFABOf6epM7sd/giphy.gif";
        Botmessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!!";
      }

      if (currentDay == 3){
        gifs = "https://media.giphy.com/media/TOWeGr70V2R1K/giphy.gif";
        Botmessage = "A few days off but come to Hackclub on "+nextMeeting+" at 4:OOPM CST @ zoom.memphishack.com ! Until then don't get caught 😉";
        color = 16568067;
      }

    if (currentDay == 2){
        color = 64511;
        gifs = "https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif";
        Botmessage = "Keep up the good work! A few days off but come to Hackclub on "+nextMeeting+" at 4:OOPM CST @ zoom.memphishack.com ! Until then join the #24/7code chat VC";
      }

    

      
      message.channel.send({embed: { 
      color: color, description:`${Botmessage} --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
      image:  {
          url: `${gifs}`
      }
      }});

      if (currentDay == 5){
        message.channel.send("http://zoom.memphishack.com")
        
      }
    }
    if(message.content.startsWith(`${prefix}help`)){
      message.channel.send({embed: { 
      color:1118018 , description:`A list of commands to try \n \n !next-meeting When the next meeting is \n !about For new Hackclubers to learn about the club
       \n !learn-code \n !socials \n !coc \n !global-hc-events \n !hackothons \n !hackclub-slack \n !help This command to display the doc for the command \n !fix-bot To go create an issue or pr for the bot on Github \n  --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀` 
      }});
    }
    if(message.content.startsWith(`${prefix}about`)){
          message.channel.send({embed: { 
          color: 65497, description:`Welcome to world of hacking! Whether you hold mutiple years of experience hacking, have never coded in your life, or you are somewhere in between, Memphis Hackclub is for you we do not care where you go to school this is a club open to ALL students!!! AND We are really EXCITED you are here!!! \n Use !coc to learn about our code of conduct and !help to learn about this bot --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
          image:  {
              url: `https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif`
          }
          }});
      message.channel.send("Our Website http://memphishack.com !socials")
    }

    if(message.content.startsWith(`${prefix}socials`)){

      message.channel.send({embed: { 
          color: 65497, description:`Follow Us --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
          image:  {
              url: `https://media.giphy.com/media/dwSHVIfc331IKFvMdf/giphy.gif`
          }
          }});
      var socials = ["Reply with your Github username message to be added the Github. Memphis Hackclub https://github.com/Memphis-Hackclub","Our Insta @memphishackclub https://www.instagram.com/memphishackclub/","Our YT HackClub Memphis https://www.youtube.com/channel/UCQEw733Z4ID3AVLtFpQ5hyw"," Our Twitter @MHackclub https://twitter.com/MHackclub","Our LinkedIn Memphis Hack Club https://www.linkedin.com/company/memphis-hack-club/?viewAsMember=true", "Our FB Group Memphis Hackclub https://www.facebook.com/groups/656997425191729"];
      for (i = 0; i < socials.length; i++) {
      message.channel.send(socials[i]);
      }
    }
} )


client.login("Your_Bot_Token")
