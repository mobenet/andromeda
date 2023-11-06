const express = require('express');
const router = express.Router(); 

// GET user info
router.get('/:userId', (req, res) => {
    const { userId } = req.params; 
    res.json({ user: { id: userId } });
});

module.exports = router; 