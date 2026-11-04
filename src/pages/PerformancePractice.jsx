import { useCallback, useMemo, useState } from "react";
import ProductList from "../components/performance-practice/ProductList";

const products = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Monitor" },
  { id: 4, name: "Laptop" },
  { id: 5, name: "Headphones" },
];

function PerformancePractice() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedName, setSelectedName] = useState("None");

  const visibleProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelect = useCallback((name) => {
    setSelectedName(name);
  }, []);

  return (
    <main>
      <h1>React Performance</h1>

      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
      >
        Increase counter
      </button>
      <p>Counter: {count}</p>

      <label htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p>Selected product: {selectedName}</p>

      <ProductList
        products={visibleProducts}
        onSelect={handleSelect}
      />
    </main>
  );
}

export default PerformancePractice;