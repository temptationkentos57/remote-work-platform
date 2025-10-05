const express = require('express');
const router = express.Router();

// Định nghĩa các route phía dự án

router.get('/', (req, res) => {
  res.send('Danh sách các dự án');
});

module.exports = router;
