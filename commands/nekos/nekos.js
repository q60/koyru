const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "nekos",
    category: "nekos",
    run: async (client, message, args) => {
        const url = 'https://nekos.life/api/neko';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`(🚫) An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random neko picture 😳`)
            .setColor('RANDOM')
            .setImage(data.neko)

        await message.channel.send(embed)
    }
}