const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns a Select Menu!'),
    async execute(interaction, client) {
        const menu = new SelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder({
                    label: 'Option 1',
                    value: 'option1',
                }),
                new SelectMenuOptionBuilder({
                    label: 'Option 2',
                    value: 'option2',
                })
            );
            
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)],
        });
    },
};