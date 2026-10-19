import { useState } from 'react'

function useToggle() {
  const [isOpen, setIsOpen] = useState(false); 
  
  const toggle = () => {
    setIsOpen((previous) => !previous)
  }
  return { isOpen, toggle }
}

export default useToggle