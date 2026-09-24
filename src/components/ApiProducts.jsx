import { useState, useEffect } from 'react';

const ApiProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [creating, setCreating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch('https://dummyjson.com/products?limit=8');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // POST - create new product
  const createProduct = async (newProduct) => {
    try {
      setCreating(true);
      setError('');

      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error('Failed to create data');

      const data = await response.json();

      setProducts((currentProducts) => [...currentProducts, data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setCreating(false);
    }
  };

  // PATCH - update existing product
  const updateProduct = async (id, updatedFields) => {
    try {
      setUpdatingId(id);
      setError('');

      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const data = await response.json();
      console.log('updated product:', data);

      // Replace the corrected product
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === data.id ? data : product
        )
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setUpdatingId(null);
    }
  };

  //Delete -del a product
  const deleteProduct = async (id) => {
  try {
    setError('');

    const response = await fetch(
      `https://dummyjson.com/products/${id}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    const data = await response.json();

    console.log(data);

    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== id
      )
    );
  } catch (error) {
    setError(error.message);
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !price || !category.trim()) {
      setError('Please fill in title, price, and category.');
      return;
    }

    createProduct({
      title,
      price: Number(price),
      category,
    });

    setTitle('');
    setPrice('');
    setCategory('');
  };

  if (loading) return <p>Loading Products..</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" disabled={creating}>
          {creating ? 'Creating...' : 'Create Product'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #cccccc',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            {product.thumbnail && (
              <img src={product.thumbnail} alt={product.title} width="100" />
            )}

            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>

            <button
              onClick={() =>
                updateProduct(product.id, { price: product.price + 10 })
              }
              disabled={updatingId === product.id}
            >
              {updatingId === product.id ? 'Updating...' : 'Update Price +10'}
            </button>

            <button onClick={() => deleteProduct(product.id)}>
              Delete Product
            </button>

            {product.dimensions && (
              <>
                <p>Height: {product.dimensions.height}</p>
                <p>Width: {product.dimensions.width}</p>
              </>
            )}

            {(product.reviews || []).map((review, index) => (
              <div key={index}>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
                <p>Reviewer: {review.reviewerName}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default ApiProducts;