import React, { useState } from 'react';
import NavBar from './NavBar';

const ListProducts = (props) => {
  const { products } = props;
  if (!products || products.length === 0) return <p>No products, sorry</p>;
  return (
    <ul>
      {products.map((products) => {
        return (
          <li key={products.id} className='list'>
            <h3 className='products-name'>{products.name} </h3>
            <p className='price'>{products.price}</p>
          </li>
        );
      })}
    </ul>
  );
};

function DisplayProducts() {

  const [appState, setAppState] = useState({
    products: null,
  });

  useState(() => {
    const apiUrl = `/lashae`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((products) => {
        setAppState({ products: products });
      });
  }, [setAppState]);

  return (
    <div className='App'>
    <NavBar />
      <div className='container'>
        <h1>La Shae products</h1>
      </div>
      <div className='products-container'>
        < ListProducts products={appState.products} />
      </div>
    </div>
  );
}
export default DisplayProducts;
