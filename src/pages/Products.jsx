
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" },
  ];

  return (
    <div>
      <h3>Products</h3>
      {
        products.map((product)=> {
            return(
                <div key={product.id}>
                    <p>{product.name}</p>
                    <Link to={`/product/${product.id}`}>View Product</Link>
                </div>
            )  
        })
      }
    </div>
  )
}

export default Products