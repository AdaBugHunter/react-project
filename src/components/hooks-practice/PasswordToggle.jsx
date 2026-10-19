import useToggle from "../../hooks/useToggle"

function PasswordToggle() {
  const {isOpen, toggle} = useToggle();

  return (
    <section>
        <h2>Password</h2>
        <label htmlFor="practice-password">Demo Password</label>
        <input 
        id="practice-password"
        type={isOpen ? "text" : "password"}
        value="practice123"
        readOnly
        />
        <button type='button' onClick={toggle}>
          {isOpen ? "Hide password" : "Show password"}
        </button>
    </section>
  )
}

export default PasswordToggle