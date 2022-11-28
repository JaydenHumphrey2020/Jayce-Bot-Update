const { InteractionType } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isButton()) {
            const { buttons } = client;
            const { customId } = interaction;
            const button = buttons.get(customId);
            if (!button) return new Error('Button not found!');

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this button!', ephemeral: true });
            }
        } else if (interaction.isSelectMenu()) {
            const { selectMenus } = client;
            const { customId } = interaction;
            const menu = selectMenus.get(customId);

            if (!menu) return new Error('Menu not found!');

            try {
                await menu.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this menu!', ephemeral: true });
            }
        } else if (interaction.type == InteractionType.ModalSubmit) {
            const { modals } = client;
            const { customId } = interaction;
            const modal = modals.get (customId);

            if (!modal) return new Error('Modal not found!');

            try {
                await modal.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this modal!', ephemeral: true });
            }
        } else if (interaction.isContextMenuCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const contextCommand = commands.get(commandName);
            if (!contextCommand) return;

            try {
                await contextCommand.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}