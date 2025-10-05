const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với nền tảng làm việc từ xa!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});