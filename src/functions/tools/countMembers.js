const { ActivityType } = require('discord.js');

module.exports = (client) => {
    client.countMembers = async () => {
        
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const channel = await guild.channels.fetch('1029418011439939696').catch(console.error);

        channel.edit(`Total Members: ${guild.memberCount}`).then(console.log).catch(console.error);


    }
}