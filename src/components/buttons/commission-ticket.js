const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');


module.exports = {
    data: {
        name: 'commission-ticket',
    },
    async execute(interaction, client) {

        // Get the Guild by ID
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);

        // Get Json Data From ticket.json
        const rawData = fs.readFileSync(`${__dirname}/../../json/ticket.json`);
        const jsonData = JSON.parse(rawData);
        
        // This is only so it dont fail
        await interaction.reply({content: "Creating Commission Request Ticket!", ephemeral: true});


        const commissionEmbed = new EmbedBuilder()
            .setTitle(`Commission Request!`)
            .setDescription(`Please Send what you would like commissioned and any reference material you have.`)
            .setColor(0x18e1ee)
        
        const closeButton = new ButtonBuilder()
            .setCustomId('close-ticket')
            .setLabel('Close')
            .setStyle(ButtonStyle.Primary);

        await guild.channels.create({

            name: `ticket-${jsonData.commissionCount}`,
            parent: '1046130044944273438',
            type: ChannelType.GuildText,

            permissionOverwrites: [

                {id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},

             ],

        }).then(
            channel => channel.send({ embeds: [commissionEmbed], components: [new ActionRowBuilder().addComponents(closeButton)] })
        ).catch(console.error);

        fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({supportCount: jsonData.supportCount, commissionCount:  jsonData.commissionCount + 1}))
    }
}