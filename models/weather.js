const mongoose = require("mongoose");
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
},
{ timestamps: true }
)

module.exports = mongoose.model("Weather", weatherSchema);
