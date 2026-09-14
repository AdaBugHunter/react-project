import { useState } from "react";

function CartManager() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cupcake", quantity: 1 },
    { id: 2, name: "Brownie", quantity: 2 }
  ]);

  function addItem() {
    if (!itemName.trim() || itemQuantity <= 0) return;

    const newItem = {
      id: Date.now(),
      name: itemName.trim(),        
      quantity: itemQuantity
    };

    setCartItems((previous) => [...previous, newItem]);
    setItemName("");
    setItemQuantity(1);
  }

  function removeItem(id) {
    setCartItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  function updateQuantity(id, newQuantity) {
    if (isNaN(newQuantity) || newQuantity <= 0) return;  

    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  function handleQuantityChange(event) {
    const value = parseInt(event.target.value);
    setItemQuantity(isNaN(value) ? 0 : value);
  }

  return (
    <div>
      <h2>Cart Manager</h2>

      <input
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
        placeholder="Item name"
      />

      <input
        type="number"
        value={itemQuantity}
        onChange={handleQuantityChange}
        min="1"
      />

      <button onClick={addItem}>Add Item</button>

      {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            {item.name}: {item.quantity}
          </span>

          <button onClick={() => removeItem(item.id)}>Remove</button>

          <input
            type="number"
            value={item.quantity}
            onChange={(event) =>
              updateQuantity(item.id, parseInt(event.target.value))
            }
            min="1"
          />
        </div>
      ))}
    </div>
  );
}

export default CartManager;