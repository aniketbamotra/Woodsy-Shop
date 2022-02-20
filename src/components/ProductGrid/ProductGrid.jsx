import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./ProductGrid.css";
import { AllProd } from "../../products";

const ProductGrid = ({ filter, sort }) => {
  const [products, setProducts] = useState(AllProd);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((product) => product.category === filter)
    );
  }, [filter]);

  useEffect(() => {
    if (sort === "best-sellers") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.numberOfItemsSold - a.numberOfItemsSold)
      );
    } else if (sort === "price-asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "price-desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
  }, [sort]);

  return (
    <div className="grid-wrap">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
