

const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('getAvatar')
        .setType(ApplicationCommandType.User),
    async execute(interaction, client) {
        await interaction.reply({
            content: `Here is the avatar of ${interaction.targetUser.username}#${interaction.targetUser.discriminator}:\n${interaction.targetUser.displayAvatarURL({ dynamic: true })}`,
        });
    }
}