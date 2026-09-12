import { useState } from 'react';

const NameInput = ({ onNameChange }) => {
  const [name, setName] = useState('');

  return (
    <>
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
        onNameChange(e.target.value);
      }}
    />
    <p>Hello, {name}!</p>
    </>
  );
};

export default NameInput;
