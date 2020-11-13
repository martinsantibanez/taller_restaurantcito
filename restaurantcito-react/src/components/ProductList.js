import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get("/data/data.json");
      const products = response.data;
      products.forEach((prod) => {
        prod.amount = 0;
      });
      setProducts(products);
      setIsLoading(false);
    }
    loadProducts();
  }, []);

  const setProductAmount = (idx, newAmount) => {
    const newProducts = [...products];
    newProducts[idx].amount = newAmount;
    setProducts(newProducts);
  };

  return (
    <div>
      <h2>Platos:</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {products.map((product, idx) => (
            <Product
              name={product.name}
              price={product.price}
              amount={product.amount}
              handleChange={(amount) => setProductAmount(idx, amount)}
              key={product.id}
            />
          ))}
        </ul>
      )}
      <div>
        <h2>Carrito:</h2>
        {products.map(
          (product) =>
            product.amount > 0 && (
              <div key={product.id}>
                {product.amount} {product.name}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ProductList;
