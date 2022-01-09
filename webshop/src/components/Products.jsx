import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    });
    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item._id} />)}
        </Container>
    );
};

export default Products;