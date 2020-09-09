const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clear",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(
                `(🚫) You don't have permissions, ${message.author.username}`
            );

        if (!args[0]) {
            return message.channel.send(`(🚫) Arguments are not valid. Please input an amount from 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);
    }
}