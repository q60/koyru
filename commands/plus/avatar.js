const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "avatar",
    description: "get your or someone's avatar",
    category: "plus",
    timeout: 10000,

    run: async (client, message, args) => {
        let Embed = new MessageEmbed()
        if (!message.mentions.users.first()){
            Embed.setTitle(`Your avatar 🤩`)
            Embed.setThumbnail(message.author.displayAvatarURL())
            Embed.setColor(`RANDOM`)
            Embed.setFooter(`Command executed by ${message.author.tag}`)
            return message.channel.send(Embed)
        } else {
            let User = message.mentions.users.first()
            Embed.setTitle(`${User.username}'s avatar 🤩`)
            Embed.setThumbnail(User.displayAvatarURL())
            Embed.setColor(`RANDOM`)
            Embed.setFooter(`Command executed by ${message.author.tag}`)
            return message.channel.send(Embed)
        }
        
    }
}