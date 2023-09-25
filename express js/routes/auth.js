const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name === 'Matthew') {
    return res.json({ status: 200, data: name });
  }
  res.send('Please return credentials');
});

module.exports = router;
