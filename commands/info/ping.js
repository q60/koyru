const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Drops the ping from the bot to Discord.",
  timeout: 10000,
  _run: async (_client, message) => {
    var ping = Date.now() - message.createdTimestamp + ' ms';
    return message.channel.send('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  },
  get run() {
    return this._run;
  },
  set run(value) {
    this._run = value;
  },
};