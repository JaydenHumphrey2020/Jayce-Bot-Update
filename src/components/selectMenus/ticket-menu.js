const { EmbedBuilder, PermissionFlagsBits, ChannelType } = require('discord.js')
const fs = require('fs');


module.exports = {
    data: {
        name: 'ticket-menu',
    },
    async execute(interaction, client) {

        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const rawData = fs.readFileSync(`${__dirname}/../../json/ticket.json`);
        const jsonData = JSON.parse(rawData);



            switch (interaction.values[0]) {
                case "Commission":

                const supportEmbed = new EmbedBuilder()
                .setTitle(`Commission Request!`)
                .setDescription(`Please Send what you would like commissioned and any reference material you have.`)
                .setColor(0x18e1ee)
                    
                    guild.channels.create({
                        name: `ticket-${jsonData.commissionCount}`,
                        parent: '1046130044944273438',
                        type: ChannelType.GuildText,
                        permissionOverwrites: [
                            {
                              id: interaction.user.id,
                              allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                           },
                         ],
                    }).then(channel => channel.send({embeds: [supportEmbed]})).catch(console.error);
                    fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({ commissionCount:  jsonData.commissionCount + 1}))

                    break;
                case "support":
                    
                break;
            
                default:
                    break;
            }

    },
};