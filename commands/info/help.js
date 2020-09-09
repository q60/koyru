const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    category: "info",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Help:')
            .setColor('RANDOM')
            .setThumbnail('https://koyru.cf/img/favicon.png')
            .addFields(
                {
                    name: 'info (k.info)',
                    value: 'Drops useful information about the bot.',
                    inline: true
                },
                {
                    name: 'cotizacionuy (k.cotizacionuy)',
                    value: 'Drops the uruguayan peso price.',
                    inline: true
                },
                {
                    name: 'covid (k.covid)',
                    value: 'Drops the latest information about Covid-19.',
                    inline: true
                },
                {
                    name: 'ping (k.ping)',
                    value: 'Drops the ping from the bot to Discord.',
                    inline: true
                },
                {
                    name: 'meme (k.meme)',
                    value: 'Drops a random meme.',
                    inline: true
                },
                {
                    name: 'thanks (k.thanks)',
                    value: 'Special thanks to all the people who helped directly or indirectly on the development of the bot.',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'ban (k.ban)',
                    value: 'Bans the user that has been tagged.',
                    inline: true
                },
                {
                    name: 'clear (k.clear)',
                    value: 'Bulk-deletes messages (1-100).',
                    inline: true
                },
                {
                    name: 'kick (k.kick)',
                    value: 'Kicks the user that has been tagged.',
                    inline: true
                },
                {
                    name: 'unban (k.unban)',
                    value: 'Unbans the tagged user (must be banned).',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'hug (k.hug + (user))',
                    value: 'Hugs the tagged user.',
                    inline: true
                },
                {
                    name: 'kiss (k.kiss + (user))',
                    value: 'Kisses the tagged user.',
                    inline: true
                },
                {
                    name: 'nekos (k.nekos)',
                    value: 'Sends a random picture of a neko.',
                    inline: true
                },
                {
                    name: 'pat (k.pat + (user))',
                    value: 'Pats the tagged user.',
                    inline: true
                },

            )
            .setFooter(`Command executed by ${message.author.tag}`)
        await message.channel.send(embed)
    }

};