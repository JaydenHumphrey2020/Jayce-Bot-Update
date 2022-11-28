const { EmbedBuilder } = require('discord.js');

module.exports ={
    name: 'guildMemberAdd',
    async execute(member, client) {
        const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
        const channel = await guild.channels.fetch('1017540801854709790').catch(console.error);
        if (!channel) return;

            const embed = new EmbedBuilder({
                title: "Welcome to Jayce's Wrokshop!",
                description: `<@${member.id}>\nWelcome to Jayce's Workshop. We are glad to see you here. Enjoy your stay, chat it up, and have fun. We offer many things from Non ELS Vehicles, to Liveries, to EUP, to Scripts, to MLO's/yMaps, and more. Please read over our Rules and Regulations which can be found here! Our Terms of Service can also be located here`,
                image: {
                    url: `https://media.discordapp.net/attachments/1006317750014197846/1024943028311441438/image0.gif`
                },
                thumbnail: {
                    url: `https://cdn-longterm.mee6.xyz/plugins/commands/images/781340330322559007/b3360b6eb39950a923794ba76c5f9436e61c6563098f91a6f8b07ea3a6581662.png`
                },
                footer: {
                    text: `We now have ${guild.memberCount} members!`,
                    icon_url: client.user.displayAvatarURL()
                }
            });

            // add multiple roles to member

            member.roles.add(["1017539515285516318"]);


            await channel.send({ embeds: [embed] });


    }
}