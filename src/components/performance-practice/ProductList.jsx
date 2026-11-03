import { memo } from "react";

function ProductList({ products, onSelect }) {
    console.log("ProductList is rendered");
  return (
    <div>
        {products.length === 0 ? (
        <p>No product found</p>
        ) : (
        products.map((product) => (
          <div key={product.id} onClick={() => onSelect?.(product)}>
            {product.name}
          </div>
        ))
      )}
    </div>
  )
}

export default memo(ProductList)