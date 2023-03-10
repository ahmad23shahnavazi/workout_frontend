import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignup();
  const submitHandler = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <form className="signup" onSubmit={submitHandler}>
      <h2>Sign Up</h2>
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
      <button disabled={isLoading}>Sign UP</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default SignUp;
