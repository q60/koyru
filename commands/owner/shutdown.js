module.exports = {
    name: "shutdown",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '524727670353952779') {
            return message.channel.send(`(🚫) You cannot use this command!`)
        }
        await message.channel.send(`Shutting down bot...`)
        process.exit();
    }
}