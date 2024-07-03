import { Schema } from "mongoose";

const eventSchema = new Schema({
    entertainment: {type: String, required: true},
    conference: {type: String, required: true},
    crusade: {type: String, required: true},
    funeral: {type: String, required: true}

})

export const eventModel = model('Event', eventSchema)