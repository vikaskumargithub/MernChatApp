import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  useToast,
  Input,
  ButtonGroup,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] =useState(false);
  let toast = useToast();
  
  const handleClick = () => setShow(!show);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name,email,password,confirmPassword,pic);
    if (!name || !email || !password || !confirmPassword || !pic) {
      toast({
        title: `Please fill all the fields`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    // if(pic.type!=="image/jpg" ||)
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("photo", pic);

    let { data } = await axios.post(
      "http://localhost:5000/api/v1/user/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/chats", { replace: true });
  };
  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <InputGroup>
        <Input
          type={show?"text":"password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
        <InputGroup>
          <Input
            type={show?"text":"password"}
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setPic(e.target.files[0])}
        />
        <ButtonGroup gap="4" display="flex">
          <Button type="submit" colorScheme="green" flex={1}>
            Sign up
          </Button>
          <Button colorScheme="red" flex={1}>
            Clear
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};
