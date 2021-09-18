function nextMeeting(){

  var currentDate = new Date();
  var hours = currentDate.getHours();
  var currentDay =currentDate.getDay();
  var mm = currentDate.getMonth() + 1;
  var dd = currentDate.getDate();
  var yyyy = currentDate.getFullYear();
  
  currentDate = mm + '/' + dd + '/' + yyyy;

  currentDate = new Date(currentDate);

  var referenceDate = new Date("06/25/2021");
  var days = currentDate.getTime() - referenceDate.getTime();
  days = days / (1000 * 3600 * 24);

  var weeks = (days/7);

  

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

  
  var nextMeeting = referenceDate;


  for ( i = weeks; i < weeks*2; i++) {
    nextMeeting.setDate(nextMeeting .getDate() + 7);
    console.log(nextMeeting);
    }

  var mm = nextMeeting.getMonth() + 1;
  var dd = nextMeeting.getDate();
  var yyyy = nextMeeting.getFullYear();
  nextMeeting = mm + '/' + dd + '/' + yyyy;
  

  if (hours == 3){
          botMessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!! Join the #idle VC channel while you late night code";
          gifs = "https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif";
          color = 1118018;
      }
      console.log(currentDay)
      if (currentDay == 5){
        if(hours <= 20){
          gifs = "https://media.giphy.com/media/WzFP9kauh3WrkoethW/giphy.gif";
          botMessage = "Come to Hackclub Today at 4:00 PM CST on zoom.memphishack.com"
          color = 16711765;
        }else{
          color = 5253281;
          gifs = "https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif";
          botMessage = "Your a little late :( Hackclub is likely over maybe not tho so just try the link, but come to Hackclub "+nextMeeting+" at 4PM CST @ zoom.memphishack.com !!!";
        }}

      if (currentDay == 4){
          color = 65306;
          gifs = "https://media.giphy.com/media/ZeXeuNFABOf6epM7sd/giphy.gif";
          botMessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!!";
        }
        
        if (currentDay == 3){
          gifs = "https://media.giphy.com/media/TOWeGr70V2R1K/giphy.gif";
          botMessage = "A few days off but come to Hackclub on "+nextMeeting+" at 4:OOPM CST @ zoom.memphishack.com ! Until then don't get caught 😉";
          color = 16568067;
        }

      if (currentDay == 2){
          color = 64511;
          gifs = "https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif";
          botMessage = "Keep up the good work! A few days off but come to Hackclub on "+nextMeeting+" at 4:OOPM CST @ zoom.memphishack.com ! Until then join the #24/7code chat VC";
        }

        else{
          var color = 16741749;
        
        var gifs = "https://media.giphy.com/media/l0HlvFUHvDB16UOwU/giphy.gif";
        botMessage = "Come to Hackclub "+nextMeeting+" at 4:OOPM CST  @ zoom.memphishack.com !!!";
        console.log('this is happening')
        }

        nextTimeInfo = new Object();
        nextTimeInfo.botMessage = botMessage;
        nextTimeInfo.gif = gifs;
        nextTimeInfo.color = color;
        nextTimeInfo.currentDay = currentDay; 
        return nextTimeInfo;
        
    
        

}

nextTimeInfo = nextMeeting();

const next = nextTimeInfo;
module.exports = next;
