

module.exports = {
    data: {
        name: 'ticket-menu',
    },
    async execute(interaction, client) {
        await interaction.reply({
            
            content: `You selected: ${interaction.values[0]}`,

        });
    },
};