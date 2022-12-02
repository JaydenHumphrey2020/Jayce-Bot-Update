const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');


module.exports = {
    data: {
        name: 'support-ticket',
    },
    async execute(interaction, client) {

        // Get the Guild by ID
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);

        // Get Json Data From ticket.json
        const rawData = fs.readFileSync(`${__dirname}/../../json/ticket.json`);
        const jsonData = JSON.parse(rawData);


        const SupportEmbed = new EmbedBuilder()
            .setTitle(`Support Request!`)
            .setDescription(`A Support Team Member will be with you shortly. In the mean time please provide the reason you need support.`)
            .setColor(0x18e1ee)
        
        const closeButton = new ButtonBuilder()
            .setCustomId('close-ticket')
            .setLabel('Close')
            .setStyle(ButtonStyle.Primary);

        await guild.channels.create({

            name: `ticket-${jsonData.supportCount}`,
            parent: '1046130004880273508',
            type: ChannelType.GuildText,

            permissionOverwrites: [
                {id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                {id: interaction.guild.roles.everyone.id, deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]}
            ],

        }).then(
    
            channel => {
                interaction.reply({content: `Support Ticket Created <#${channel.id}>!`, ephemeral: true});
                channel.send({
                    embeds: [SupportEmbed],
                    components: [new ActionRowBuilder().addComponents(closeButton)]
                });
                channel.send(`<@&1017539524294881310>`).then(msg => {
                    msg. delete({ timeout: 1000 /*time unitl delete in milliseconds*/});
                    })
                
            }

        ).catch(console.error);

        fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({commissionCount:  jsonData.commissionCount, supportCount:  jsonData.supportCount + 1}))

    }
}