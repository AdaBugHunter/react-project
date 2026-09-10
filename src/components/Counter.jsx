import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => prev + 1);   
  }

  function decreaseCount() {
    setCount((prev) => prev - 1);   
  }

  function resetCount() {
    setCount(0);                     
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;