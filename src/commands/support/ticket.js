const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Create Ticket embed!'),
    async execute(interaction, client) {
        
        const ticketMenu = SelectMenuBuilder()
            .setCustomId(`ticket`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder({
                    label: 'Commision',
                    value: 'Commision',
                }),
                new SelectMenuOptionBuilder({
                    label: 'Support',
                    value: 'Support',
                })
            );

    }
}