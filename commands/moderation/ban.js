const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    _run: async (_client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`(🚫) You don't have permissions, ${message.author.username}`);
        }
        if (!args[0]) {
            return message.channel.send(`(🚫) Arguments are not valid. Please input a user to ban.`);
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned!`);
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