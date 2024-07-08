import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    let { data } = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/chats", { replace: true });
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="name"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit" colorScheme="blue" marginTop='1em'>
          Login
        </Button>
      </form>
    </div>
  );
};
