const router = require("express").Router();
const Product = require("../models/Product");

//product toevoegen
router.post("/addproduct", async (req,res)=>{
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imgurl: req.body.description
    });
    try{
        const savedProduct = await newProduct.save();
        res.send(201).json(savedProduct); //succesfully added
    }
    catch (err){
        res.status(500).json(err);
    }
});

//product update
router.put("/:id", async (req,res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,{
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    }
    catch (err){

        res.status(500).json(err);

    }
});

//product delete
router.delete("/:id", async (req,res) => {
    try{
         await Product.findByIdAndDelete(
            req.params.id,{
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json("product had been deleted...");
    }
    catch (err){

        res.status(500).json(err);

    }
});
//get product by id
router.get("/find/:id", async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (err){

        res.status(500).json(err);

    }
});

//get all products
router.get("/", async (req,res) => {
    const qNew = req.query.new;
    try{
      let products;
      if(qNew){
          products = await Product.find().sort({createdAt: -1}).limit(1);
      }
      else
      {
          products = await Product.find();
      }
      res.status(200).json(products);
    }
    catch (err){

        res.status(500).json(err);

    }
});



module.exports = router