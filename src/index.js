const 
process= require("process"),
eris = require("eris"),
chalk = require("chalk"),
client = new eris(`Bot ${process.env.token}`, {
         intents: ["all"]
}),
commands = require("./client/commands.js");
let
errors = [];

process.on("uncaughtException", (e, origin) => {
         errors.push(e);
         console.log(chalk.red(`${e}`));
});
client.connect()
client.on("ready", async() => {
         console.log(chalk.green("Bot is online!"));
         commands.forEach(async([json, type]) => {
                  client.createGuildCommand("907506731662319636", json, type)
         });
});
client.on("messageCreate", async(msg) => {
         if (msg?.content === "a!errors" && msg?.member?.id === "849690256945184828") {
                  errors.length > 0 ? console.clear() : console.log("No errors!");
                  errors.forEach((e) => console.log(e));
                  msg.channel.createMessage({
                           content: errors.length !== 0 ? "Errors logged in console :ballot_box_with_check:" : "No Errors :white_check_mark:",
                           messageReference: {
                                    messageID: msg.id
                           },
                           allowedMentions: {
                                    repliedUser: true
                           }
                  })
         }
});
client.on("interactionCreate", async(i) => {
         if (i.data.name) {
                  switch (i.data.name) {
                           case "about":
                                    await i.acknowledge(64);
                                    break;
                           default:
                                    await i.createMessage({content: "Command not found!", flags: 64});
                                    break;
                  }
         }
});
client.on("error", (e) => {
         console.log(chalk.red("Error"));
         console.log(e);
});