const { createMessage, getMessages } = require('../Controllers/messageController')

const router = require('express').Router()

router.post('/',createMessage)
router.get("/:chatId",getMessages)

module.exports = router;
