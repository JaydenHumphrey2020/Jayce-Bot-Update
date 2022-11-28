const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Returns a Button!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('sub-yt')
            .setLabel('Subscribe to my YT')
            .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)],
        });
    }
}