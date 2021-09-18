# A Club Discord Bot
Build In | Contributors | Live version
--- | --- | ---
**Node.js/Discord API** | [@philip-hub](https://github.com/philip-hub) | Clone and run with continous server

![Robot](https://i.giphy.com/media/6VMn2qsqlSzJ0GZ5K9/giphy.webp)

# Description and Setup
This is a custom made Discord bot free for you to use on your server or club server. This would work best for Hack Club's or Computer science clubs, but with a little bit of editing, it can work great for your club or server. To setup clone the repo with Replit Pro and keep it on continuously running. The bot would work with Replit's free plan, but it will turn off after 30 minutes or so because Replit's free plan does not allow continous running of projects. After it turns off you can restart it though. [Install and Add Moment JS](https://momentjs.com) with NPM and Yarn for the time command to work. The time is by default set to CST, but this can be changed on line 192 in index.js. To change the next meeting time, change line 22 and 56 in next-meeting.js and also change line 59 in index.js. These lines need to be changed to the number of your desired weekly meeting day with 0 being Sunday and 6 being Saturday. For the next meeting command, you may also need to change the hours varible in lines 57 and 23 in next-meeting.js to the ending time of your meeting in UTC. You can change message content and gifs where you see fit. Change the commands and times to your liking and your all set for any questions on setup or bug fixes leave an issue or email philippounds@memphishack.com. Happy Hacking!

# Requirements
• Discord API Token (get from Discord Developers)<br>
• Moment JS for the time command ([install instructions](https://momentjs.com))<br>
• A continously hosted node.js server (Replit Pro works great)
