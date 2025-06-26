require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Node App";

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to ${APP_NAME}</h1><p>Your Node.js app is running!</p>`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});
