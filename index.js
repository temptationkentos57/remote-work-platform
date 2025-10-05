const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the remote work platform! Enjoy your stay.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});