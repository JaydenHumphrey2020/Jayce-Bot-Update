

module.exports = {
    data: {
        name: 'fav-color',
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `you set your favorite color to ${interaction.fields.getTextInputValue("favColorInput")}`,
        });
    }
}