const { MessageEmbed } = require("discord.js");

const createApplyMessage = (applierName, applierDiscordId) => {
    console.log(applierName, applierDiscordId);
    const message = new MessageEmbed();
    message.setTitle("Nouvelle postulation !");
    message.setColor("GREEN");
    message.setFields(
        { name: "Nom du postulant", value: applierName, inline: true },
        { name: "ID Discord du postulant", value: applierDiscordId, inline: true }
    );
    message.setDescription("Une nouvelle personne vient de postuler pour rejoindre le pôle conférences & séance !");

    return message;
}

module.exports = createApplyMessage;