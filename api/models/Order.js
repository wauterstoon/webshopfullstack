const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        firstname: {type: String, required: true, unique: false},
        lastname: {type: String, required: true, unique: false},
        street: {type: String, required: true, unique: false},
        number: {type: String, required: true, unique: false},
        postalcode: {type: String, required: true, unique: false},
        city: {type: String, required: true, unique: false},
        phone: {type: String, required: true, unique: false},
        email: {type: String, required: true, unique: false},
        totalprice: {type: String, required: false, unique: false},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
