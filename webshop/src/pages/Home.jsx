import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default Home;