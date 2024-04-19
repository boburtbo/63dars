import React, { useState } from "react";
import allProducts from "./data.js";

function App() {
  const [products, setProducts] = useState(allProducts);

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filteredProducts);
  };

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;

    const filterType = e.target.name;
    if (filterType === "title") {
      filterByTitle(selectedCategory);
    } else if (filterType === "price") {
      filterByPrice(selectedCategory);
    }
  };

  const filterByTitle = (title) => {
    if (title === "all") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((product) => {
        return product.title === title;
      });
      setProducts(filteredProducts);
    }
  };

  const filterByPrice = (price) => {
    if (price === "all") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((product) => {
        return product.price === price;
      });
      setProducts(filteredProducts);
    }
  };

  return (
    <div>
      <div className="filter-container">
        <select name="price" onChange={handleFilterChange}>
          <option value="all">All Prices</option>

          {Array.from(new Set(products.map((product) => product.price))).map(
            (price) => (
              <option key={price} value={price}>
                {price}
              </option>
            )
          )}
        </select>

        <select name="title" onChange={handleFilterChange}>
          <option value="all">All Titles</option>
          {Array.from(new Set(products.map((product) => product.title))).map(
            (title) => (
              <option key={title} value={title}>
                {title}
              </option>
            )
          )}
        </select>
      </div>

      <ul className="products-grid">
        {products.map((product) => (
          <li key={product.id}>
            <figure className="snip1577">
              <h3>market</h3>
              <img src={product.thumbnail} alt="" width={400} height={200} />
            </figure>

            <div className="card-body">
              <h3>{product.title}</h3>
              <p>
                <b>Description:</b> {product.description}
              </p>
              <h4>Price: {product.price}</h4>
              <p>Stock: {product.stock}</p>
              <p>Rating: {product.rating}</p>
              <button onClick={() => deleteProduct(product.id)} className="btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
