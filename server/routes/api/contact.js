const express = require('express');
const { sendContactEmail } = require('../../emails/contact');

const router = new express.Router();

// @router POST api/contact
// @desc post contact form
// @access PUBLIC
router.post('/', async (req, res) => {
  const { name, email, msg, number, reason } = req.body;
  if (!name || !email || !msg || !number || !reason) {
    return res.status(406).json({ msg: 'fill in the fields' });
  }
  try {
    await sendContactEmail(name, email, msg, number, reason);
    res.status(200).json({ msg: 'email sent' });
  } catch (error) {
    res.status(400).json({ msg: 'Unable to send message' });
  }
});

module.exports = router;
