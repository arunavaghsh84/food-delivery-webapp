const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantModel = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const restaurantSchema = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantModel);
