const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Create Ticket embed!'),
    async execute(interaction, client) {
        
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const channel = await guild.channels.fetch('1047279417367466084').catch(console.error);

        const ticketMenu = SelectMenuBuilder()
            .setCustomId(`ticket`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder({
                    label: 'Commission',
                    value: 'Commission',
                }),
                new SelectMenuOptionBuilder({
                    label: 'Support',
                    value: 'Support',
                })
            );

            await channel.send({
                components: [new ActionRowBuilder().addComponents(ticketMenu)],
            });

    }
}