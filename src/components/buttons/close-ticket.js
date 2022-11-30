

module.exports = {
    data: {
        name: 'close-ticket',
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: 'Closing Ticket...',
        }).then(
            setTimeout(() => interaction.channel.delete(), 10000)         
        )
    }
}