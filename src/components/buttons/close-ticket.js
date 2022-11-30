

module.exports = {
    data: {
        name: 'close-ticket',
    },
    async execute(interaction, client) {
        await interaction.channel.send({
            content: 'Closing Ticket...',
        }).then(
            interaction => {
                setTimeout(() => interaction.CHANNEL.delete(), 10000)
            }            
        )
    }
}