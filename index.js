require("dotenv").config();
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const commandHandlers = require("./utils/handlers/commands");
const eventHandlers = require("./utils/handlers/events");
const setup = require("./models/setup");

const client = new Client({ intents: config.discordIntents });
client.commands = new Collection();
client.login(process.env.botToken);

const main = async () => {
    console.clear();
    await commandHandlers(client);
    await eventHandlers(client);
    setup();
}

main();