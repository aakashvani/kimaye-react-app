import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
// import { unstable_HistoryRouter} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  //?Button onclick function
  //?catch all the variable declared
  async function Signup() {
    // console.log(firstname, lastname, email, password);
    try {
      const item = { firstname, lastname, email, password };
      console.log("item", item);

      let result = await fetch("http://localhost:8080/userdata", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
        },
      });

      result = await result.json();
      console.log("result", result);
      alert(
        `congratulation  ${result.firstname} Signup "successfull" "Hurray" `
      );
      //?localstore
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/LoginPage");
      // return <Navigate to="/loginform" />
      // setTimeout(function () {
      //  navigate('/loginform');
      // }, 1000);
    } catch (err) {
      console.log(err);
      // alert(err);
    }
  }
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      value={firstname}
                      name="firstname"
                      onChange={(e) => setfirstname(e.target.value)}
                      type="text"
                    />
                  </FormControl>
                  {/* </Box> */}
                  {/* <Box> */}
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      value={lastname}
                      name="lastname"
                      onChange={(e) => setlastname(e.target.value)}
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      type="submit"
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={Signup}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link to="/LoginPage">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignPage;
