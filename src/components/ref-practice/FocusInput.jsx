import {useRef} from 'react'

function FocusInput() {
  const inputRef = useRef(null)

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div>
        <h4>Name</h4>
        <label htmlFor="name">Your Name</label>
        <input ref={inputRef} id="name" type="text" placeholder='Enter your name' />
        <button type='button' onClick={focus}>Focus Name</button>
    </div>
  )
}

export default FocusInput