import { useState } from 'react';

function MessageToggle() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMessage() {
    setIsVisible((prev) => !prev);   
  }

  return (
    <div>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {isVisible && <p>Welcome to React!</p>}
    </div>
  );
}

export default MessageToggle;