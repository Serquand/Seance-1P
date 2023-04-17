const {MessageButton} = require("discord.js");

const acceptButton = (title, idButton) => {
    const button = new MessageButton();
    button.setCustomId(idButton);
    button.setLabel(title);
    button.setStyle("SUCCESS");

    return button;
}

module.exports = acceptButton;