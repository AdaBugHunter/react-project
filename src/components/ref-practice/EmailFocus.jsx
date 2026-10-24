import { useRef } from "react"

function EmailFocus() {
  const emailRef = useRef(null)
  const nameRef = useRef(null)

  const focusName = () => {
     nameRef.current?.focus();
  }
  const focusEmail = () => {
    emailRef.current?.focus();
  }
  return (
    <div>
     <h4>Email Focus</h4>
     <label htmlFor="name">Name</label>
     <input type="text" ref={nameRef} id="name"/>
     <button type="button" onClick={focusName}>Focus Name</button>
     <label htmlFor="email">Email</label>
     <input type="text" ref={emailRef} id="email"/>
     <button type="button" onClick={focusEmail}>Focus Email</button>
    </div>
  )
}

export default EmailFocus