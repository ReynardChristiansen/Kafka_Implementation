
# Kafka Implementation

This project demonstrates a simple implementation of Apache Kafka messaging system integrated with an Express.js web server, using Node.js, kafkajs library for Kafka interaction, and MongoDB for storing data.

When interacting with the API and sending a message, the process initiates with the producer adding the message to the Kafka topic. Subsequently, the Kafka consumer, configured to listen to the designated topic, promptly receives the dispatched message. Concurrently, MongoDB is queried to retrieve user data corresponding to the message.

**_Note_**: When trying out this project, make sure to run it locally. 


## Features

- Get User (GET): http://localhost:{PORT}/api/users



## Request Body

Get a user require a request body in the following format:

    {
        "message": STRING
    }


## .ENV
    PORT={YOUR PORT NUMBER}
    MONGO_URI={YOUR MONGODB URI}


## Getting Started

To start this project, please follow these steps:

- **Install Kafka**: Ensure Kafka is installed on your system.
- **Start Zookeeper**: Start Zookeeper, which is required for Kafka to run.
- **Start Kafka Server**: Launch the Kafka server to begin messaging operations.
- **Clone Repository**: Clone the [repository](https://github.com/ReynardChristiansen/Kafka_Implementation.git) to your local machine.
- **Add Environment Variables**: Create a `.env` file and add your configuration settings.
- **Install Dependencies**: Run `npm install` in the project directory to install required dependencies.
- **Start the Server**: Run `npm run dev` to start the Express server.
- **Testing with POSTMAN**: Use POSTMAN or a similar tool to test the API endpoints.
- **Check Consumer Console**: Monitor the consumer console in your local environment to observe message consumption.


## Kafka Documentation

For detailed documentation on Kafka, please check out [My Documentation](https://github.com/ReynardChristiansen/ApacheKafka_Note)



## Feedback

If you have any feedback, please reach out to me at reynard.satria@gmail.com


