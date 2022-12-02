const sourcebin = require('sourcebin_js');

module.exports = {
    data: {
        name: 'close-ticket',
    },
    async execute(interaction, client) {

        // get channel closing
        const channel = interaction.channel

        channel.messages.fetch().then(async (messages) => {

            const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');
            let response;
            try {
                response = await sourcebin.create([
                    {
                        name: ' ',
                        content: output,
                        languageId: 'text',
                    },
                ], {
                    title: `Chat transcript for ${channel.name}`,
                    description: ' ',
                });
            }
            catch(e) {
                return interaction.channel.send('An error occurred, please try again!');
            }
            interaction.reply('the transcript is complete. Please click the link below to view the transcript', response.url);

        })






        await interaction.reply({
            content: 'Closing Ticket in 60 seconds',
        }).then(
            setTimeout(() => interaction.channel.delete(), 60000)         
        )
    }
}