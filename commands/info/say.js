module.exports = {
    name: "say",
    category: "info",
    timeout: 120000,

    run: async (client, message, args) => {
    let = message.content.split(" ").slice(1);
    message.delete();
        const newLocal = "(🚫) Nope, I won't ping anybody!";
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send(newLocal);
    message.channel.send(args.join(" ")).cleanContent;
    }
};