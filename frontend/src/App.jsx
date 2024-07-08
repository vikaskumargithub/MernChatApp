import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ChatBox } from "./components/ChatBox";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/chats" element={<ChatBox />}></Route>
      </Routes>
    </>
  );
}

export default App;
