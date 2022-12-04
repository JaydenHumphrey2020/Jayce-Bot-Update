
const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');

module.exports = {
    data: {
        name: 'claim-ticket',
    },
    async execute(interaction, client) {
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const crole = guild.roles.cache.find(role => role.id === '1047321970007621764');
        const srole = guild.roles.cache.find(role => role.id === '1017539524294881310');

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
            .setLabel('Claimed')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(true)

        if(interaction.member.roles.cache.has("1017539524294881310")) {
            interaction.message.edit({
                embeds: [SupportEmbed],
                components: [new ActionRowBuilder().addComponents(closeButton,claimButton)]
            });

            interaction.channel.permissionOverwrites.edit(
                [
                    {id: crole.id, deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                    {id: srole.id, deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                    {id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                ]
            )
    
            interaction.reply('Ticket has been Claimed!')
        }else {
            interaction.reply({content: 'Only a Support Team Member can claim tickets!' ,ephemeral: true})
        }
    }
}