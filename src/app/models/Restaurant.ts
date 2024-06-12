const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantModel = new Schema({
    name: String,
});

export const restaurantSchema = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantModel);
