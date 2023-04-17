const acceptRejectButtons = require("../utils/component/AcceptRejectButtons");
const getChannelWithId = require("../utils/discord/getChannelWithId");
const createApplyMessage = require("../utils/message/CreateApplyMessage");
const uuid = require("uuid");

module.exports = {
    name: "apply_creator",
    description: "Postuler en tant que créateur",
    options: [
        {
            name: "name",
            description: "Le nom du créateur à ajouter",
            required: true, 
            type: "STRING",
            autocomplete: false
        },
        {
            name: "creator_discord_id",
            description: "ID Discord du créateur",
            required: false, 
            type: "STRING",
            autocomplete: false
        }
    ],
    runSlash: async (client, interaction) => {
        // Récupération du channel
        const channelInfo = await getChannelWithId(client, process.env.infoChannelId);
        
        // Récupération des informations
        const nameApplier = interaction.options.getString("name");
        const discordIdApplier = interaction.options.getString("creator_discord_id") ?? interaction.user.id;

        // Création et envoie du message
        const messageEmbed = createApplyMessage(nameApplier, discordIdApplier);
        const idTicket = uuid.v4();
        const messageButton = acceptRejectButtons(idTicket);

        channelInfo.send({
            embeds: [messageEmbed],
            content: "**Ticket n°" + idTicket, 
            components: [messageButton]
        });


        return interaction.reply("Working...")
    }
};