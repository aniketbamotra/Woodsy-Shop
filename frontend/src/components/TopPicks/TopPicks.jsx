import React, { useEffect, useState } from "react";
import "./TP.css";
import Product from "../Product/Product";
import { topProd } from "../../products";
import axios from "axios";
import { Link } from "react-router-dom";

const TopPicks = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const getTopProducts = async () => {
      try {
        const res = await axios.get(
          "https://managedatabase.woodsyshoppe.com/api/products"
        );
        setTopProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getTopProducts();
  }, []);

  return (
    <div className="top-items">
      {topProducts.slice(0, 2).map((product) => (
        <Link
          to={`/product/${product._id}`}
          className="top-prod-wrap"
          id={product.id}
          key={product._id}
        >
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

export default TopPicks;
