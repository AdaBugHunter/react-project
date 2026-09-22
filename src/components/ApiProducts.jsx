import { useState, useEffect } from 'react';

const ApiProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(() => {

  const fetchProducts = async() => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('https://dummyjson.com/products?limit=8');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data= await response.json();

      console.log('data');
      setProducts(data.products);
    } catch (error){
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
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
          <p>Dimensions: {product.dimensions.height}</p>
           <p>Dimensions: {product.dimensions.width}</p>

          {(product.reviews || []).map((review, index) => (
            <div key={index}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <p>Reviewer: {review.reviewerName}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ApiProducts;