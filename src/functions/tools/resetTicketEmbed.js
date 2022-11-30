const { ActivityType, EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = (client) => {
    client.resetTicketEmbed = async () => {
        
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const channel = await guild.channels.fetch('1047279417367466084').catch(console.error);

        


    }
}