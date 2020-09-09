const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    _run: async (_client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`(🚫) You don't have permissions, ${message.author.username}`);
        }
        if (!args[0]) {
            return message.channel.send(`(🚫) Arguments are not valid. Please input a user to kick.`);
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send(`${member} has been kicked!`);
        }
        catch (e) {
            return message.channel.send(`(🚫) Arguments are not valid. User is not in the server.`);
        }

    },
    get run() {
        return this._run;
    },
    set run(value) {
        this._run = value;
    },
}