const { ActivityType } = require('discord.js');

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.WATCHING,
                text: "for new videos",
                status: "online"
            },
            {
                type: ActivityType.Listening,
                text: "for new Ideas",
                status: "idle"
            },
            {
                type: ActivityType.Playing,
                text: "with my code",
                status: "dnd"
            },
        ];

        const option = Math.floor(Math.random() * options.length);
        

        client.user.setPresence({
            activities: [{
                    name: options[option].text,
                    type: options[option].type
                }],
                status: options[option].status
            });
    }
}