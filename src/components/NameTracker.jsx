import { useEffect, useState } from 'react';

function NameTracker() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Name Tracker</h2>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />

      <p>{name === '' ? 'No name entered' : `Current Name: ${name}`}</p>
    </div>
  );
}

export default NameTracker;