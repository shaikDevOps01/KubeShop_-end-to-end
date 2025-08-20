import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-Commerce Store</h1>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      )}
    </div>
  );
}

export default App;
