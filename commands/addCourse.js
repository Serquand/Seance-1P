const course = require("../models/course");

module.exports = {
    name: "add_course",
    description: "Ajoute un cours",
    options: [
        {
            name: "course",
            description: "Nom du cours",
            required: true,
            type: "STRING"
        }
    ],
    runSlash: async (client, interaction) => {
        const courseName = interaction.options.getString("course");
        await course.create({ courseName })

        return interaction.reply({
            content: "We will add the course " + courseName + " to the DB !",
            ephemeral: true
        });
    }
};