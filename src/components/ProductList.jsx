const ProductList = ({ products }) => {

  console.log(products,"ProductList");
  return (
    <div>
      {products?.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default ProductList;