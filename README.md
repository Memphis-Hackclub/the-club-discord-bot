# The Club - Discord Bot
Build In | Contributors | Live version
--- | --- | ---
**Node.js/Discord API** | [@philip-hub](https://github.com/philip-hub) [@MaybeDuck](https://github.com/MaybeDuck)  | Clone and run with continous server

![Robot](https://i.giphy.com/media/6VMn2qsqlSzJ0GZ5K9/giphy.webp)

<h1>The Club - Discord Bot</h1>
<p>The Club is a discord bot initially made by <a href="https://github.com/philip-hub" target="_blank">@philip</a> and maintained by <a href="https://github.com/Memphis-Hackclub" target="_blank">Memphis Hackclub. This is a open source bot that you can add to your hackclub, student club, or any Discord server. The setup instructions are below.</a></p>

# Requirements
• Discord API Token (get from Discord Developers)<br>
• Moment JS for the time command ([install instructions](https://momentjs.com))<br>
• A continously hosted node.js server (Replit Pro works great)
 <h1>Setup</h1>
 <p>1. Clone the <a href="https://github.com/Memphis-Hackclub/the-club-discord-bot" , target="_blank">Gihub repository (click here)</a> on <a href="https://replit.com" target="_blank">Replit.com</a> with Replit Pro and in your cloned replit settings check always on. The bot would work with Replit's free plan, but it will turn off after 30 minutes or so because Replit's free plan does not allow continous running of projects. After it turns off you can restart it though.</p><br>
    <p>2. Go to the <a href="https://discord.com/developers/" target="_blank">Discord Developers Portal</a> and create a new application and then on the panel on the right create a bot. Copy the bot token. Use control (or Command) F in the index.js file inside the Replit editor and find the line "
client.login("Your_Bot_Token")" and this line is likely the last line. Delete the 
"Your_Bot_Token", Put down a set of quotes, and inside the quotes paste your token. </p>
<p>3. On your Discord Developer Console find your Client ID in OAuth2 and copy it. Replace "Replace_Me" in this link and then copy the link to your browser add the bot to your server (that you are an admin of).</p>
<br>
<p>4. <a href="https://momentjs.com" target="_blank">Install and Add Moment JS</a> with NPM and Yarn for the time command to work. The time is by default set to CST, but this can be changed on line 192 in index.js.</p>
<p>5. Us the !socials command and follow all of Memphis Hackclubs accounts and if you are a student who enjoys computer science and your engineering use the !about command and join [Memphis Hackclub](http://discord.memphishack.com) - We would love to have you! Edit your replit as you wish</p>


# Customize
To change the next meeting time, change line 22 and 56 in next-meeting.js and also change line 59 in index.js. These lines need to be changed to the number of your desired weekly meeting day with 0 being Sunday and 6 being Saturday. For the next meeting command, you may also need to change the hours varible in lines 57 and 23 in next-meeting.js to the ending time of your meeting in UTC. You can change message content and gifs where you see fit. Change the commands and times to your liking and your all set for any questions on setup or bug fixes leave an issue or contact us below.

# List of Built in Commands
   <p> !next-meeting When the next meeting is <br><br> !about For new Hackclubers to learn about the club <br><br>
        !learn-code An intro to learning code <br><br> !socials Follow our socials <br><br> !coc See our code of conduct <br><br> !global-events Fun Global Hackclub Events <br><br> !hack Find hackothons happening that you can join! <br><br> !slack Learn about Global Hackclub's Slack <br><br> !help This command to display the doc for the command<br><br> !fix To go create an issue or pr for the bot on Github</p>
    

# Contact
 [Discord](http://discord.memphishack.com)<br>
 club@memphishack.com<br>
 Main Dev: philippounds@memphishack.com<br>
 <hr>
 <h1><a href="http://memphishack.com" target="_blank">MemphisHack.com</a></h1>
 

