const { MessageActionRow } = require("discord.js");
const acceptButton = require("./buttons/acceptButton");
const rejectButton = require("./buttons/rejectButton");

const acceptRejectButtons = (idApplier) => {
    const row = new MessageActionRow();
    const validId = "valid-apply-" + idApplier, rejectId = "reject-apply-" + idApplier;

    row.addComponents(acceptButton("Valider", validId), rejectButton("Rejeter", rejectId));
    
    return row;
}

module.exports = acceptRejectButtons;