const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vmz0xho.mongodb.net/foodDelivery?retryWrites=true&w=majority&appName=Cluster0`;

export const mongoDB = async () =>
    await mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
        })
        .then(async () => {
            console.log('MongoDB Connected');
        })
        .catch((err: Error) => console.log(err));
