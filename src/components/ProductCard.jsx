function ProductCard({ title, price, category }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{category}</p>
      <strong>{price}</strong>
    </div>
  );
}

export default ProductCard;