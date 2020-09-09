const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "kiss",
    category: "nekos",
    run: async (client, message, args) => {
        const url = 'https://nekos.life/api/kiss';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`(🚫) An error has occured, try again!`)
        }
    
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(data.url)

        await message.channel.send(embed)
        return message.channel.send(`${message.author.username} 💞 ${args[0]}`);
    }
}