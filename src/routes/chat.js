const express = require('express');
const router = express.Router();

// Định nghĩa các route cho chức năng chat

router.get('/', (req, res) => {
  res.send('Chat nhóm');
});

module.exports = router;
