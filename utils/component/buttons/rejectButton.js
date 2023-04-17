const {MessageButton} = require("discord.js");

const rejectButton = (title, idButton) => {
    const button = new MessageButton();
    button.setCustomId(idButton);
    button.setLabel(title);
    button.setStyle("DANGER");

    return button;
}

module.exports = rejectButton;