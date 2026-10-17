import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function WelcomeMessage() {
  const {userName} = useContext(UserContext)
  return (
    <div>
       <p>Welcome, {userName}</p>
    </div>
  )
}

export default WelcomeMessage