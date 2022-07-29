module.exports = function init(client) {
         const 
         app = require("express")(),
         bodyParser = require("body-parser"),
         types = ["issues", "push", "issue_comment"];

         app.use(bodyParser.json());
         app.listen(1109);

         app
         .post("/", (req, res) => {
                  const payload = {
                           ...req.body,
                           id: process.env[`hookId`],
                           token: process.env[`hookToken`]
                  };
                  const type = req.headers[`X-GitHub-Event`];
                  console.log(payload, type);
                  if (types.includes(type)) {
                           require(`./types/${type}`)(payload, client);
                  }
                  res.status(200).json({});
         })
         .get("/", (req, res) => res.send("Alive"));
}