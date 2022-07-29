module.exports = function init(client) {
         const 
         app = require("express")(),
         bodyParser = require("body-parser"),
         chalk = require("chalk"),
         types = ["issues", "push", "issue_comment"];

         app.use(bodyParser.json());
         app.listen(1109);
         console.log(chalk.yellow("Server is Ready!"))

         app
         .post("/", (req, res) => {
                  const payload = {
                           ...req.body,
                           id: process.env[`hookId`],
                           token: process.env[`hookToken`]
                  };
                  const type = req.headers[`x-github-event`];
                  console.log(payload, type);
                  if (types.includes(type)) {
                           require(`./types/${type}`)(payload, client);
                  }
                  res.status(200).json({});
         })
         .get("/", (req, res) => res.send("Alive"));
}