const { EmbedBuilder } = require('discord.js');

const Parser = require('rss-parser');
const parser = new Parser();
const fs = require('fs');

module.exports = (client) => {

    client.checkVideo = async () => {
        const data = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCNBAQj609e8e1PdfneBHbMw').catch (err => console.log(err));

        const rawData = fs.readFileSync(`${__dirname}/../../json/video.json`);
        const jsonData = JSON.parse(rawData);
        
        if (jsonData.id !== data.items[0].id) {
            
            fs.writeFileSync(`${__dirname}/../../json/video.json`, JSON.stringify({ id: data.items[0].id }));

            const guild = await client.guilds.fetch('1017531292885192765').catch(console.error);
            const channel = await guild.channels.fetch('1026220804154855566').catch(console.error);
            //1041273408043892787

            const { title, link, id, author } = data.items[0];

            const embed = new EmbedBuilder({
                title: title,
                url: link,
                timestamp: Date.now(),
                image: {
                    url: `https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`
                },
                author: {
                    name: author,
                    icon_url: 'https://cdn.discordapp.com/attachments/928246807375544343/928246807375544346/yt.png',
                    url: 'https://www.youtube.com/channel/UCNBAQj609e8e1PdfneBHbMw?sub_confirmation=1'
                },
                footer: {
                    text: client.user.tag,
                    icon_url: client.user.displayAvatarURL()
                }
            });


            await channel.send({ embeds: [embed], content: `@everyone Hello everyone, I am either live on YouTube, or I have just posted a video on YouTube. Either way, thank you for the support! <3 ` });

        }




    }

}