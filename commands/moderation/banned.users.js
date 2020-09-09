const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "banned.users",
    category: "moderation",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`(‼) There are ${bans.size} banned users.`)
        })

    }
}