const Course = require("./course");
const Creator = require("./Creator");

const setup = async () => {
    await Course.sync();
    await Creator.sync();
}

module.exports = setup;