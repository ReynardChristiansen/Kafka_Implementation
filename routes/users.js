const express = require('express');
const {sendMessageToKafka} = require('../controllers/UserController');
const router = express.Router();
const KafkaConfig = require('../config/config');


router.get('/',  sendMessageToKafka);

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume('my-topic', (value)=>{
    console.log(value);
})


module.exports = router;