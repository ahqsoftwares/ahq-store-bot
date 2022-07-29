const fetch = require("node-fetch");

fetch("http://localhost:1109", {
         headers: {
                  "x-github-event": "push",
                  'Content-type': 'application/json; charset=UTF-8'
         },
         method: "post",
         body: JSON.stringify({
                  commits: [{
                           added: ["ahq.js"],
                           removed: ["u.js"],
                           modified: ["ahq.jsx"],
                           author: {
                                    name: "ahq"
                           }
                  }, {
                           added: ["ahq.js"],
                           removed: ["u.js"],
                           modified: ["ahq.jsx"],
                           author: {
                                    name: "ahq"
                           }
                  }, {
                           added: ["ahq.js"],
                           removed: ["u.js"],
                           modified: ["ahq.jsx"],
                           author: {
                                    name: "uhq"
                           }
                  }]
         })
})
.catch(e => console.log(e))
.then(res => res.text())
.then(json => console.log(json));