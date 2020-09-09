const Discord = require("discord.js");
module.exports = async member => {

    const channel = member.guild.channels.cache.find(ch => ch.name === 'goodbye');
    if (!channel) return;

    const embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL({
            format: 'png',
            dynamic: true,
        }))
        .setDescription(`Hope to see you soon, <@${member.id}>.`)
        .setThumbnail(member.user.displayAvatarURL({
            format: 'png',
            dynamic: true,
        }))
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(member.guild.name);
    channel.send(embed);
};