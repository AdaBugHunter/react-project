const ProductForm = ({ onAddProduct }) => {
      const handleAdd = () => {
        const newProduct = {
            id : Date.now(),
            name : 'Monitor'
        };
        onAddProduct(newProduct);
      };
      return(
        <>
        <button onClick={handleAdd}>Add Product</button>
        </>
      )
}

export default ProductForm;