import {useState} from 'react';

function StockStatus() {
  const [inStock, setInStock] = useState(true);

  function toggleStock() {
    setInStock((previous) => !previous);
  }

  return (
    <div>
      <h2>Stock Status</h2>

      <p>{inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={toggleStock}>
        {inStock ? "Mark as Out of Stock" : "Mark as In Stock"}
      </button>
    </div>
  );
}

export default StockStatus;
