require("dotenv").config();
const express = require("express");
app = express();

const Assistant = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");
const assistant = new Assistant({
  version: "2023-06-15",
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_WATSONX_ASSISTANT_APIKEY,
  }),
  serviceUrl: "https://api.us-south.assistant.watson.cloud.ibm.com",
});

app.use("/api", async (req, res) => {
  const text = req.query.text;
  const assistant_id = process.env.IBM_WATSONX_ASSISTANT_ID;

  const sessionResponse = await assistant.createSession({
    assistantId: assistant_id,
  });
  let session_id = sessionResponse.result.session_id;

  const response = await assistant.message({
    assistantId: assistant_id,
    sessionId: session_id,
    input: {
      message_type: "text",
      text: text,
    },
  });
  res.send(response.result.output.generic);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
