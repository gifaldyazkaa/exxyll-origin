const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "kiss",
  aliases: [],
  usage: "@mentionedUser",
  description: "Kiss someone you loved by this command!",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const {
      data: { url },
    } = await axios.get(`https://nekos.life/api/kiss`);
    const uri = url;

    // const wibu!
    const ke_target = message.mentions.members.first();
    const user = message.author.tag;

    if (!ke_target) return message.reply("You must tag someone to Kiss.");

    const embed = new MessageEmbed()
      .setColor("#FFC0CB")
      .setTitle(`${user} Kiss ${ke_target} Pog :O`)
      .setImage(uri)
      .setFooter(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setTimestamp();

    message.channel.send(embed);
  },
};
