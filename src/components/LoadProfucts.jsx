import { useEffect, useState } from "react";

function LoadProducts() {
  const dummyProducts = [
    { id: 1, name: "Chocolate Cupcakes", category: "Cupcake" },
    { id: 2, name: "Vanilla Cupcakes", category: "Cupcake" },
    { id: 3, name: "Strawberry Cupcakes", category: "Cupcake" },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading products...");
    const id = setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  const clearProducts = () => {
    setProducts([]);
    setLoading(false);
  };

  return (
    <div>
      <h2>Load Products</h2>
      <button onClick={clearProducts}>Clear Products</button>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoadProducts;