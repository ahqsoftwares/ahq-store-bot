function handle({commits}, client) {
         const {YELLOW} = require("./colors");
         let mapped = commits.map((commit) => [commit.added, commit.removed, commit.modified, commit.author.name]),
         added = mapped.map(([a, b, c, d]) => a).join(", "),
         removed = mapped.map(([a, b, c, d]) => b).join(", "),
         modified = mapped.map(([a, b, c, d]) => c).join(", "),
         contributors;
         mapped.map(([a, b, c , d]) => `[${d}](https://github.com/${d})`).forEach((e) => contributors.push(e));



         client.executeWebhook(payload.id, payload.token, {
                  embeds: [{
                           title: `New Push on master!`,
                           color: YELLOW,
                           description: "Commit Details",
                           fields: [{
                                    name: "Added",
                                    value: added,
                                    inline: true
                           }, {
                                    name: "Removed",
                                    value: removed,
                                    inline: true
                           }, {
                                    name: "Modified",
                                    value: modified,
                                    inline: true
                           }, {
                                    name: "Contributors",
                                    value: contributors.join(", "),
                                    inline: false
                           }]
                  }],
                  username: "AHQ Store Github Push"
         });
}