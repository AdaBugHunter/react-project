import useToggle from "../../hooks/useToggle"

function TipsToggle() {
  const {isOpen, toggle} = useToggle();
  return (
    <section>
        <h2>Tips toggle</h2>
        <button type="button" onClick={toggle}>
            {isOpen ? "Hide Tips" : "Show Tips"}
        </button>
        {isOpen && <p>Tips of toggle</p>}
    </section>
  )
}

export default TipsToggle