const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const arvis = new EmbedBuilder()
    .setTitle("Discord.JS V14 Örnek Bot")
    .setDescription("Bu Bot `ArviS#0011` Tarafından Yapılmıştır")
    .setColor("#fffff")
    .setTimestamp()
    return message.channel.send({embeds : [arvis]});

};
exports.conf = {
  aliases: ["test, ornek, ornk"]
};

exports.help = {
  name: "örnek"
};










//ArviS#0011
