
const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');

module.exports = {
    data: {
        name: 'claim-ticket',
    },
    async execute(interaction, client) {

        const SupportEmbed = new EmbedBuilder()
            .setTitle(`Support Request!`)
            .setDescription(`A Support Team Member will be with you shortly. In the mean time please provide the reason you need support.\nClaimed by: <@${interaction.member.id}>`)
            .setColor(0x18e1ee)
        
        const closeButton = new ButtonBuilder()
            .setCustomId('close-ticket')
            .setLabel('Close')
            .setStyle(ButtonStyle.Primary);

        const claimButton = new ButtonBuilder()
            .setCustomId('claim-ticket')
            .setLabel('Claim')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(true)


        interaction.message.edit({
            embeds: [SupportEmbed],
            components: [new ActionRowBuilder().addComponents(closeButton,claimButton)]
        })
    }
}