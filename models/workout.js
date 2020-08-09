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
            trim: true,
            required: "Type of the exercise:"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of the exercise:"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration time:"
        },
        weight: Number,

        reps: Number,

        sets: Number,

        distance: Number
    }]
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;