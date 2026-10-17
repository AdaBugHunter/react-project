import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function UserName() {
    const {userName,changeName , resetName} = useContext(UserContext)
  return (
    <>
      <p>User:{userName}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={resetName}>Reset</button>
    </>
  )
}

export default UserName