module.exports = function handle({commits, id, token}, client) {
         const {GREEN} = require("./colors");
         let mapped = commits.map((commit) => [commit.added, commit.removed, commit.modified, commit.author.name]),
         added = {},
         removed = {},
         modified = {},
         contributors = {};
         mapped.map(([a, b, c, d]) => a).forEach((e) => added[e] = 0);
         mapped.map(([a, b, c, d]) => b).forEach((E) => removed[E] = 0);
         mapped.map(([a, b, c, d]) => c).forEach((E) => modified[E] = 0);
         mapped.map(([a, b, c , d]) => `[${d}](https://github.com/${d})`).forEach((e) => {contributors[e] = 0;});



         client.executeWebhook(id, token, {
                  embeds: [{
                           title: `New Push on master!`,
                           color: GREEN,
                           description: "Commit Details",
                           fields: [{
                                    name: "Files Added",
                                    value: `**${Object.keys(added).join(", ")}**`,
                                    inline: true
                           }, {
                                    name: "Files Removed",
                                    value: `**${Object.keys(removed).join(", ")}**`,
                                    inline: true
                           }, {
                                    name: "Files Modified",
                                    value: `**${Object.keys(modified).join(", ")}**`,
                                    inline: true
                           }]
                  }, {
                           title: "Contributors",
                           description: `***${Object.keys(contributors).join(", ")}***`,
                           color: GREEN
                  }],
                  username: "AHQ Store Github Push"
         });
}