const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "thanks",
  category: "info",
  description: "special thx",
  timeout: 10000,
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Special thanks:')
    .setColor('RANDOM')
    .setThumbnail('https://koyru.cf/img/favicon.png')
    .addFields(
        {
            name: 'To @gmanrique:',
            value: 'I used his API from the BROU, to make the uruguayan peso price command',
            inline: true
        },
        {
            name: 'To @ninoduckman:',
            value: "He made the awesome Koyru logo <3",
            inline: true
        },
        {
            name: 'To @yanitan89:',
            value: "Goodbye/welcome messages are inspired on his's.",
            inline: true
        },
        {
            name: 'To my dad:',
            value: "He helped me to make the animation on both the logo and text on Koyru's website.",
            inline: true
        },
        {
            name: 'To @sell:',
            value: "Without his/her tutorials this bot wouldn't probably exist",
            inline: true
        }
        )
        .setFooter(`Command executed by ${message.author.tag}`)
await message.channel.send(embed)
  }
};