import useToggle from "../../hooks/useToggle"

function DetailToggle() {

  const {isOpen, toggle} = useToggle();
  return (
    <section>
        <h2>Details</h2>
        <button type='button' onClick={toggle}>
            {isOpen ? "Hide details" : "Show details"}
        </button>
        {isOpen && <p>This is the details text</p>}
    </section>
  )
}

export default DetailToggle