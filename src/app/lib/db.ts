const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD } = process.env;
const mongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.vmz0xho.mongodb.net/foodDelivery?retryWrites=true&w=majority&appName=Cluster0`;

export const mongoDB = async () =>
    await mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
        })
        .then(async () => {
            console.log('MongoDB Connected');
        })
        .catch((err: Error) => console.log(err));
