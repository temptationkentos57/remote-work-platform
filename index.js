const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to our remote work platform! We hope you enjoy your experience.');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});