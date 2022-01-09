const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: false},
        price: {type: Number, required: true, unique: false},
        description: {type: String, required: true, unique: false},
        imgurl: {type: String, required: true, unique: false}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);