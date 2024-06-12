const User = require('../models/UserModel');
const KafkaConfig = require('../config/config');

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
}

const sendMessageToKafka = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    try {
        const { message } = req.body;
        const kafkaConfig = new KafkaConfig();
        const messages = [
            { key: '1', value: message }
        ];
        await kafkaConfig.produce("my-topic", messages);

        res.status(200).json({
            status: "200",
            message: "Message successfully sent",
            user: users
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "500",
            message: "Error sending message"
        });
    }
}

module.exports = {
    getUsers,
    sendMessageToKafka
}