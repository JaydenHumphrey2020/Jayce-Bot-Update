const sourcebin = require('sourcebin_js');

module.exports = {
    data: {
        name: 'close-ticket',
    },
    async execute(interaction, client) {

        await interaction.reply({
            content: 'Closing Ticket in 10 seconds',
        }).then(
            setTimeout(() => interaction.channel.delete(), 10000)         
        )
    }
}