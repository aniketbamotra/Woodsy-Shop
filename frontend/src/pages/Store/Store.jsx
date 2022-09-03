import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Store.css";
import Filter from "../../components/Filter/Filter";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Store = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [prod, setProd] = useState("");

  const getProd = (childdata) => {
    setProd(childdata);
  };

  return (
    <div>
      <h1 className="page-title">Store</h1>
      <div className="search-wrap">
        <p className="total-prod-no">{prod} Products</p>
        {/* <input type="text" placeholder="Search" className="search-container" /> */}
      </div>
      <div className="store-body">
        <Filter setFilter={setFilter} setSort={setSort} />
        <ProductGrid filter={filter} sort={sort} getProd={getProd} />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
