const { EmbedBuilder, PermissionFlagsBits, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');


module.exports = {
    data: {
        name: 'ticket-menu',
    },
    async execute(interaction, client) {

        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        



            switch (interaction.values[0]) {
                case "Commission":
                const rawData1 = fs.readFileSync(`${__dirname}/../../json/ticket.json`);
                const jsonData1 = JSON.parse(rawData1);

                interaction.deferReply({ephemeral: true})

                const commissionEmbed = new EmbedBuilder()
                .setTitle(`Commission Request!`)
                .setDescription(`Please Send what you would like commissioned and any reference material you have.`)
                .setColor(0x18e1ee)

                const CloseCommissionButton = new ButtonBuilder()
                    .setCustomId('close-ticket')
                    .setLabel('Close')
                    .setStyle(ButtonStyle.Primary);
                    
                    guild.channels.create({
                        name: `ticket-${jsonData1.commissionCount}`,
                        parent: '1046130044944273438',
                        type: ChannelType.GuildText,
                        permissionOverwrites: [
                            {
                              id: interaction.user.id,
                              allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                           },
                         ],
                    }).then(

                        channel => channel.send({
                            embeds: [commissionEmbed],
                            components: [new ActionRowBuilder().addComponents(CloseCommissionButton)]
                        })

                        ).catch(console.error);
                        interaction.editReply(`#ticket-${jsonData.commissionCount}`)
                    fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({ commissionCount:  jsonData1.commissionCount + 1}))

                    break;
                case "Support":
                    const rawData = fs.readFileSync(`${__dirname}/../../json/ticket.json`);
                    const jsonData = JSON.parse(rawData);
                    const SupportEmbed = new EmbedBuilder()
                    .setTitle(`Support Request!`)
                    .setDescription(`A Support Team Member will be with you shortly. In the mean time please provide the reason you need support.`)
                    .setColor(0x18e1ee)
    
                    const CloseSupportButton = new ButtonBuilder()
                        .setCustomId('close-ticket')
                        .setLabel('Close')
                        .setStyle(ButtonStyle.Primary);
                        
                        guild.channels.create({
                            name: `ticket-${jsonData.supportCount}`,
                            parent: '1046130004880273508',
                            type: ChannelType.GuildText,
                            permissionOverwrites: [
                                {
                                  id: interaction.user.id,
                                  allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                               },
                               {
                                id: interaction.guild.roles.everyone.id,
                                deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                               },
                             ],
                        }).then(
    
                            channel => channel.send({
                                embeds: [SupportEmbed],
                                components: [new ActionRowBuilder().addComponents(CloseSupportButton)]
                            })
                            ).catch(console.error);

                        fs.writeFileSync(`${__dirname}/../../json/ticket.json`, JSON.stringify({ supportCount:  jsonData.supportCount + 1}))
                    
                break;
            
                default:
                    break;
            }

    },
};