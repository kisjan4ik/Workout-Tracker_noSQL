const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            required: "Type of the exercise:"
        },
        name: {
            type: String,
            unique: true,
            required: "Name of the exercise:"
        },
        duration: {
            type: Number,
            required: "Duration time:"
        },
        weight: {
            type: Number
        },
        reps:{
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;