const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "cotizacionuy",
    category: "info",
    run: async (client, message, args) => {
        const baseUrl = "https://cotizaciones-brou.herokuapp.com/api/currency/latest";

        let url, response, dolaruy;

        try {
            url = `${baseUrl}`
            response = await axios.get(url)
            dolaruy = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
        }

        const embed = new MessageEmbed()
            .setTitle('Cotización del peso uruguayo:')
            .setColor('#00a2a2')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png')
            .addFields(
                {
                    name: 'Venta argentinos:',
                    value: 'UYU$' + dolaruy.rates.ARS.sell.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Compra argentinos:',
                    value: 'UYU$' + dolaruy.rates.ARS.buy.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Venta reales:',
                    value: 'UYU$' + dolaruy.rates.BRL.sell.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Compra reales:',
                    value: 'UYU$' + dolaruy.rates.BRL.buy.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Venta euros:',
                    value: 'UYU$' + dolaruy.rates.EUR.sell.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Compra euros:',
                    value: 'UYU$' + dolaruy.rates.EUR.buy.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Venta dólares:',
                    value: 'UYU$' + dolaruy.rates.USD.sell.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Compra dólares:',
                    value: 'UYU$' + dolaruy.rates.USD.buy.toLocaleString(),
                    inline: true
                },
                )
                .setFooter(`Command executed by ${message.author.tag}`)
        await message.channel.send(embed)
    }
};