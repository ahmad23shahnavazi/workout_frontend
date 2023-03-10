import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <LogIn /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
