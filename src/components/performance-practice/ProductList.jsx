import { memo } from "react";

function ProductList({ products, onSelect }) {
  console.log("ProductList is rendered");
  return (
    <div>
      {products.length === 0 ? (
        <p>No product found</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} onClick={() => onSelect?.(product)}>
              {product.name}
              <button type="button" onClick={() => onSelect(product.name)}>
                Select
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(ProductList);
