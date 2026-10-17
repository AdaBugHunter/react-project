import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [userName , setUserName] = useState("Areeba");
  const changeName = () => {
     setUserName("Areeba Ali")
  } 
  const resetName = () => {
    setUserName("Areeba")
  }
  return (
    <UserContext.Provider value={{ userName, changeName , resetName}}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
