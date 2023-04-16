const Creator = require("../models/Creator");

module.exports = {
    name: "add_creator",
    description: "Ajouter un créateur",
    options: [
        {
            name: "creator_name",
            description: "Nom du créateur",
            required: true, 
            type: "STRING",
            autocomplete: false
        },
        {
            name: "creator_discord_id",
            description: "ID Discord du créateur",
            required: true, 
            type: "STRING",
            autocomplete: false
        }
    ], 
    runSlash: async (client, interaction) => {
        const creatorName = interaction.options.getString("creator_name");
        const creatorDiscordId = interaction.options.getString("creator_discord_id");
        await Creator.create({ creatorName, creatorDiscordId });
        
        return interaction.reply("Nous avons ajouté le créateur à la base de données !");
    }
}