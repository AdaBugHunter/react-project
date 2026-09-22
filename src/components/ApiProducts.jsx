import { useState, useEffect } from 'react';

const ApiProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(() => {

  fetch('https://dummyjson.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      return response.json();
    })
    .then((data) => {
        console.log(data);
      setProducts(data.products);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=>{
        setLoading(false);
    });
}, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
  else if (products.length === 0) return <p>No products found.</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} width="100" />

          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>

          {(product.reviews || []).map((review, index) => (
            <div key={index}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <p>Reviewer: {review.reviewer}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ApiProducts;