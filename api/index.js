const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/Products");
const orderRoute = require("./routes/Orders");
const cartRoute = require("./routes/Cart");
const cors = require("cors");

mongoose.connect("mongodb+srv://Toon:Wauters@cluster0.kubhy.mongodb.net/webshopweb3?retryWrites=true&w=majority")
    .then(() => console.log("db connection successfull!")).catch((err) =>{console.log(err)});

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);




app.listen(5000, () => {
    console.log("server running...");
});
