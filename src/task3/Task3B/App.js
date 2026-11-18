import React, { useState, useEffect } from "react";
import ProductData from "./ProductData";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const dbData = await fetch("https://fakestoreapi.com/products");
        const result = await dbData.json();
        setProducts(result);
      } catch (error) {
        alert("Failed to fetch the data: " + error.message);
      }
    };
    getData();
  }, []);
  const productsInfo = products.map((product, index) => (
    <ProductData key={index} product={product} />
  ));
  return (
    <div>
      <h1>Making a GET request with an API</h1>
      <div>{productsInfo}</div>
    </div>
  );
};
export default App;
