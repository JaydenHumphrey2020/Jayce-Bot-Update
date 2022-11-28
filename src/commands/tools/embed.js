const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed!'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`Testing V14 Embeds`)
            .setDescription(`This is a test embed!`)
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
            })
            .addFields([
                {
                    name: `Hya`,
                    value: `This is a test embed!`,
                    inline: true
                },
                {
                    name: `Hyaa`,
                    value: `This is a test embed!`,
                    inline: true
                },
                {
                    name: `Hyaa`,
                    value: `This is a test embed!`,
                    inline: false
                }
            ]);
            await interaction.reply({ embeds: [embed] });

    }
}