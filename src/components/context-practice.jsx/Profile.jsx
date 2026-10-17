import { useContext } from "react"
import UserName from "./UserName"
import { UserContext } from "../../context/UserContext"

function Profile() {
    const {userName} = useContext(UserContext)
  return (
    <section>
        <p>Profile</p>
        user:{userName}
       <UserName />
       
    </section>
  )
}

export default Profile