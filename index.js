//sets up important variables 
const Discord = require('discord.js') 
const client = new Discord.Client()
const fs = require('fs')
client.msgs = require('./msgs.json')
prefix = "!"

//keeps the bot running 24/7 by creating it into a webpage
var http = require('http');  
  http.createServer(function (req, res) {
    res.setHeader('Content-type', 'text/html');
    fs.readFile('./index.html', (err, html) => {
        if(err)
           res.write("Error");    
        else
           res.write(html);    
        res.end();
    });
}).listen(8080);

// changes the status of the bot every 10 seconds
client.once("ready", () =>{
  console.log("your bot is ready!")

  let activities = ['😂','💻', '🤯', '💖', '😀', '⚽️', '💾', '🐣', '🇺🇸','🐼', '😉' ,'🕹'], i = 0;
  setInterval(() => client.user.setActivity(`24/7 Beats ${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c"  }), 5000)
})


const nextTimeInfo = require('./next-meeting');


botMessage = nextTimeInfo.botMessage;
gifs =  nextTimeInfo.gif;
color =  nextTimeInfo.color;
currentDay =  nextTimeInfo.currentDay;

console.log(botMessage);
console.log(gifs);
console.log(color);
console.log(currentDay);
     
      

    

//next-meeting command and logic that dictates the gif, message, and colors used
client.on('message', (message)=>{
  if(message.content.startsWith(`${prefix}next-meeting`)){
     
      //sends the messaged with the varibles defined with the logic above
      message.channel.send({embed: { 
      color: color, description:`${botMessage} --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
      image:  {
          url: `${gifs}`
      }
      }});
      console.log(currentDay)
      if (currentDay == 5){
        message.channel.send("http://zoom.memphishack.com")
        
      }
    }

    //the help command logic
    if(message.content.startsWith(`${prefix}help`)){
      message.channel.send({embed: { 
      color:1118018 , description:`A list of commands to try \n \n !next-meeting When the next meeting is \n !about For new Hackclubers to learn about the club
       \n !learn-code An intro to learning code \n !socials Follow our socials \n !coc See our code of conduct \n !global-events Fun Global Hackclub Events \n !hack Find hackothons happening that you can join! \n !slack Learn about Global Hackclub's Slack \n !help This command to display the doc for the command \n !fix To go create an issue or pr for the bot on Github \n  --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`,
      image: {
        url: "https://media.giphy.com/media/l0HlTPnnfzRsf4f2U/giphy.gif"
      }
      }});
    }
    // the about command
    if(message.content.startsWith(`${prefix}about`)){
          message.channel.send({embed: { 
          color: 65497, description:`Welcome to world of hacking! Whether you hold mutiple years of experience hacking, have never coded in your life, or you are somewhere in between, Memphis Hackclub is for you we do not care where you go to school this is a club open to ALL students!!! AND We are really EXCITED you are here!!! \n Use !coc to learn about our code of conduct and !help to learn about this bot --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
          image:  {
              url: `https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif`
          }
          }});
      message.channel.send("Our Website http://memphishack.com !socials")
    }
     // the socials command
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
    // the slack command
    if(message.content.startsWith(`${prefix}slack`)){
      message.channel.send({embed: { 
      color:1118018 , description:`Global Hackclub Slack --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
      image:  {
              url: `https://media.giphy.com/media/5xtDarzqYMWFigufLws/giphy.gif`
          }
      }});
      message.channel.send("https://hackclub.com/slack/");
    }
    // the coc command
    if(message.content.startsWith(`${prefix}coc`)){
      message.channel.send("Our Code of Conduct https://memphis-hackclub.github.io/the-new-website/howtojoin.html --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
    // learn-code command
  if(message.content.startsWith(`${prefix}learn-code`)){
    message.channel.send({embed: { 
      color: 65497, description:`We are soo happy you have began your coding journey!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
        image:  {
            url: `https://media.giphy.com/media/f1pYoLDg4y0HC/giphy.gif`
        }
          }});
      var learncodemessage ="";
      var resources = ["1. Create a free Replit account to begin easily writing code https://replit.com/~","2. Build your first website in under an hour https://workshops.hackclub.com/personal_website/", "3. Learn More about HTML https://www.w3schools.com/html/default.asp", " And Or Begin Learning Python https://www.w3schools.com/python/default.asp", "After you build your first websites check out the these cool projects https://workshops.hackclub.com", "Come to our weekly workshop meettings! !next-meeting"];
      for (i = 0; i < resources.length; i++) {
      learncodemessage=learncodemessage+"\n"+resources[i];
      }
      message.channel.send(learncodemessage);
      
    }
    // global-events command
    if(message.content.startsWith(`${prefix}global-events`)){
      message.channel.send("Upcoming Global Hackclub events https://events.hackclub.com --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
    // the fix command
    if(message.content.startsWith(`${prefix}fix`)){
      message.channel.send({embed: { 
      color:1118018 , description:`Make a fix, change, or report a problem for this bot on our Github --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
      image:  {
              url: `https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif`
          }
      }});
      message.channel.send("Link to the repo https://github.com/Memphis-Hackclub/the-club-discord-bot");
    }
    // the hack command
    if(message.content.startsWith(`${prefix}hack`)){
      message.channel.send({embed: { 
      color:1118018 , description:`We highly recommended you participate in a hackothons --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
      image:  {
              url: `https://media.giphy.com/media/29HN29NtuCd7rw04t8/giphy.gif`
          }
      }});
      message.channel.send("Check out these highschool hackothons https://hackathons.hackclub.com or find more (highschool and non highschool) hackothons on https://devpost.com");
    }
    if(message.content.startsWith(`${prefix}hehe`)){
      message.channel.send("https://www.youtube.com/watch?v=52Xwkg01mCI&t=13s --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }

  if(message.content.startsWith(`${prefix}RBV`)){
      message.channel.send("iA? John may pay you $10 to figure this out . . . --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
  if(message.content.startsWith(`${prefix}GCN`)){
      message.channel.send("https://www.youtube.com/watch?v=BNpTA_FN7Iw --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
  if(message.content.startsWith(`${prefix}1jz`)){
      message.channel.send("https://www.youtube.com/watch?v=0RuUmZgDtFw --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
  if(message.content.startsWith(`${prefix}elon`)){
      message.channel.send("https://www.youtube.com/watch?v=riru9OzScwk --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀");
    }
    if(message.content.startsWith(`GAMER` || `gamer` || `GAMMMMMERRRRRRRRR` || `Gamer.`)){ // idk why this is not working
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }
    if(message.content.startsWith( `gamer`)){
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }
     if(message.content.startsWith( `GAMMMMMERRRRRRRRR`)){
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }
    if(message.content.startsWith( `Gamer`)){
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }
    if(message.content.startsWith( `Gaaaaaaaa`)){
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }
    if(message.content.startsWith( `Gaaaaaaaayyyyymmmmmeeeeeerrrrrrrrrz`)){
      message.channel.send (`${message.author} A true gamer indeed with a ping of ${client.ws.ping} ms; with such untamed skill now time to be a HACKKKER!!! --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`);
    }

        if(message.content.startsWith(`${prefix}time`)){
          var moment = require('moment'); 
          message.channel.send({embed: { 
          
          color: 9437320, description:` It is currently `+moment().utcOffset(-5).format('MMMM Do YYYY, h:mm:ss a')+` in Memphis, Tennesee, USA, Earth --- The Club 👩🏾‍💻🧑🏽‍💻👨🏾‍💻👩🏼‍💻🧑🏻‍💻👩🏿‍💻🚀`, 
          image:  {
              url: `https://media1.giphy.com/media/IZcjxKQNbOOly/giphy.gif?cid=790b7611fdc3c7309e203011a8c330cdd7849b92d791640b&rid=giphy.gif`
          }
          }});
      
    }

} )



// the client id
client.login("Your_Bot_Token")
