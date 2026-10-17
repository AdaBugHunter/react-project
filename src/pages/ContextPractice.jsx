import Dashboard from "../components/context-practice.jsx/Dashboard";
import UserProvider from "../context/UserProvider";

function ContextPractice() {
  return (
    <div>
      <p>Context</p>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  );
}

export default ContextPractice;
