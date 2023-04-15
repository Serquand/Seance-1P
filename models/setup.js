const course = require("./course");

const setup = async () => {
    await course.sync();
}

module.exports = setup;