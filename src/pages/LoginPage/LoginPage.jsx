import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/LoginPage");
    }
  }, [navigate]);

  const login = async () => {
    try {
      console.log(email, password);
      let item = { email, password };
      console.log(item);
      let result = await fetch(" http://localhost:8080/logindata", {
        method: "POST",

        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      console.log("result", result.status);
      // eslint-disable-next-line eqeqeq
      if (result.status == 400) {
        alert("Invalid Email or Password");
      } else {
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        alert("login succesful");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <p>features</p> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/signupform">Forgot password?</Link>
                </Stack>
                {/* <Link to="/loginform"> */}{" "}
                <Button
                  onClick={login}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                {/* </Link> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default LoginPage;
