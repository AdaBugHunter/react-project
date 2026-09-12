import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn((previous) => !previous);
  }

  return (
    <div>
      <h2>Login Status</h2>

      <p>{isLoggedIn ? "Welcome back" : "Please log in"}</p>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default LoginStatus;