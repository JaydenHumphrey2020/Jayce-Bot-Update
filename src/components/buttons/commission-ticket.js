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

        const myRole = guild.roles.cache.find(role => role.id === '1047321970007621764');

        const commissionEmbed = new EmbedBuilder()
            .setTitle(`Commission Request!`)
            .setDescription(`Please Send what you would like commissioned and any reference material you have.`)
            .setColor(0x18e1ee)
        
        const closeButton = new ButtonBuilder()
            .setCustomId('close-ticket')
            .setLabel('Close')
            .setStyle(ButtonStyle.Primary);

            const claimButton = new ButtonBuilder()
            .setCustomId('claim-ticket')
            .setLabel('Claim')
            .setStyle(ButtonStyle.Primary)

        await guild.channels.create({

            name: `ticket-${jsonData.commissionCount}`,
            parent: '1046130044944273438',
            type: ChannelType.GuildText,

            permissionOverwrites: [

                {id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                {id: myRole.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]},
                {id: interaction.guild.roles.everyone.id, deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]}

             ],

        }).then(
    
            channel => {
                interaction.reply({content: `Commission Request Ticket Created <#${channel.id}>!`, ephemeral: true});
                channel.send({
                    embeds: [commissionEmbed],
                    components: [new ActionRowBuilder().addComponents(closeButton,claimButton)]
                });
                channel.send(`<@&1047321970007621764>`).then(msg => {
                    msg. delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
                    })
                
            }

        ).catch(console.error);

        fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({supportCount: jsonData.supportCount, commissionCount:  jsonData.commissionCount + 1}))
    }
}