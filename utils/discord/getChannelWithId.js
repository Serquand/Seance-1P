const getChannelWithId = async (client, idChannel) => {
    return await client.channels.fetch(idChannel)
}

module.exports = getChannelWithId;