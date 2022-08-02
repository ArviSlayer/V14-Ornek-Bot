const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag}: Aktif`)
client.user.setActivity(`ArviS#0011`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
console.log(`Botta Toplam ${files.length} Komut Var`);
files.forEach(f => {
let props = require(`../komutlar/${f}`);
    
console.log(`Yüklenen Komut: ${props.help.name}`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
});










//ArviS#0011