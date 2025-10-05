const express = require('express');
const router = express.Router();

// Định nghĩa các route cho chia sẻ tài liệu

router.get('/', (req, res) => {
  res.send('Chia sẻ tài liệu');
});

module.exports = router;
