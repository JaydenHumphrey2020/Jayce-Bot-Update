

module.exports = {
    data: {
        name: 'claim-ticket',
    },
    async execute(interaction, client) {
        console.log(interaction.message.components[0].ActionRow.components)
    }
}