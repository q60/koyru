const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "info",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('General information:')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Koyru is being used in ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '👥 Channels',
                    value: `Koyru is being used in ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Users',
                    value: `${client.users.cache.size} users are using Koyru 😎`,
                    inline: true
                },
                {
                    name: '⏲️ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '🕸 Website',
                    value: `https://www.koyru.cf`,
                    inline: true
                },
            )
            .setFooter(`Command executed by ${message.author.tag}`)

        await message.channel.send(embed)
    }
}