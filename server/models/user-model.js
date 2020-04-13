const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        interest: { type: String, required: true },
        roles: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)