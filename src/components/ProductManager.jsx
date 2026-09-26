import { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const ProductManager = () => {
   const [products, setProducts]= useState([]);
   
   const addProduct = (newProduct) => {
      setProducts((currentProduct) => [
        ...currentProduct,
        newProduct
      ]);
   };
   return(
   <>
   <ProductForm onAddProduct={addProduct} />
   <ProductList products={products} />
   </>
   );
};

export default ProductManager;