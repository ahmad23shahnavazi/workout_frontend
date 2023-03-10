import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();
  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <form className="login" onSubmit={submitHandler}>
      <h2>Log In</h2>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label>password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button>Log In</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default LogIn;
