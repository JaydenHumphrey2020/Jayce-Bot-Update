
const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');

module.exports = {
    data: {
        name: 'claim-ticket',
    },
    async execute(interaction, client) {

        const SupportEmbed = new EmbedBuilder()
            .setTitle(`Support Request!`)
            .setDescription(`A Support Team Member will be with you shortly. In the mean time please provide the reason you need support.\n\nClaimed by: <@${interaction.member.id}>`)
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

        let supportRole = message.guild.roles.cache.get("1017539524294881310");

        if(interaction.member.roles.cache.has(supportRole)) {
            interaction.message.edit({
                embeds: [SupportEmbed],
                components: [new ActionRowBuilder().addComponents(closeButton,claimButton)]
            });
    
            interaction.reply('Support Ticket has been Claimed!')
        }else {
            interaction.reply({content: 'Only a Support Team Member can claim tickets!' ,ephemeral: true})
        }
    }
}