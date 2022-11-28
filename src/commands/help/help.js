const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { APIEmbedField } = require('discord-api-types/v9');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Returns All Commands!'),
    async execute(interaction, client) {

        const helpEmbed = new EmbedBuilder()
            .setTitle(`Help!`)
            .setDescription(`Here Are all our Commands!`)
            .setColor(0x18e1ee)
            .setTimestamp(Date.now())
            .setFields(
                { name: 'Misc', value: '`/help`' },
                { name: 'Comming Soon', value: 'More Commands Comming Soon!' },
            );

        await interaction.reply({ embeds: [helpEmbed] });

    } 
}