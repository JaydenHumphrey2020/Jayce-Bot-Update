const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Create Ticket embed!'),
    async execute(interaction, client) {
        
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const channel = await guild.channels.fetch('1047279417367466084').catch(console.error);

        const ticketEmbed = new EmbedBuilder()
            .setTitle(`Create New Ticket!`)
            .setDescription(`If You Would like to ask for a commision or need Support Please Create A ticket Below.`)
            .setColor(0x18e1ee)

        const ticketMenu = new SelectMenuBuilder()
            .setCustomId(`ticket-menu`)
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
                embeds: [ticketEmbed],
                components: [new ActionRowBuilder().addComponents(ticketMenu)],
            });

    }
}