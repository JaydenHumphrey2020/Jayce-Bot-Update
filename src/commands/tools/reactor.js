const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactor')
        .setDescription('Returns reactions!'),
    async execute(interaction, client) {
        const message = await interaction.reply({ content: 'React to this message!', fetchReply: true });

        const emoji = client.guild.emojis.cache.find(emoji => emoji.id === 'emojiID');

        message.react(emoji);

        const filter = (reaction, user) => {
            return reaction.emoji.name == emoji && user.id === interaction.user.id;
        };

        const collector = message.createReactionCollector({ filter, time: 15000 });

        collector.on('collect', (reaction, user) => {
            interaction.editReply('Collected ' + reaction.emoji.name);
        });

        collector.on('end', collected => {
            interaction.editReply('Collected ' + collected.size + ' items');
        });
    }
}