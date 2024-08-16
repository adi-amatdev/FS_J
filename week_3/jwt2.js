const zod = require("zod");
const jwt = require("jsonwebtoken");

const usernameSch = zod.string().email();
const passwordSch = zod.string().min(6);

function signJwt(username, password) {
  // Your code here
  let resp1 = usernameSch.safeParse(username);
  let resp2 = passwordSch.safeParse(password);

  if (!(resp1.success && resp2.success)) {
    console.error("error");
    process.exit(0);
  }
  console.log("success");
}

signJwt("harkirat@gmail.com", "paw2SWDWD");
