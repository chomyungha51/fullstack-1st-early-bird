import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DefaultUser } from "./constants";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(DefaultUser);
  const onChangeUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} onChangeUser={onChangeUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} onChangeUser={onChangeUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
