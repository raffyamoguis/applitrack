import React, { useState, useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Box,
  AbsoluteCenter,
  Card,
  CardBody,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
  Flex,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ID } from "appwrite";
import { account } from "../../appwriteConfig";

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [matchPassword, setMatchPassword] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length >= 8) {
      const result = await account.create(ID.unique(), email, password);
      console.log(result);
    }
  };

  useEffect(() => {
    setMatchPassword(checkPassword());
  }, [password, cpassword]);

  const checkPassword = () => {
    return password === cpassword;
  };
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter p="4" color="gray" axis="both">
        <Text mb="2" fontSize={{ base: "xs", sm: "sm" }} align="center">
          Signup to use this awesome application. 🤨
        </Text>
        <Card
          boxSize={{ base: "xs", sm: "md", md: "lg" }}
          h={{ base: "sm", sm: "md" }}
          borderRadius="xl"
          variant="outline"
          shadow="sm"
          p={{ base: "2", sm: "4" }}
        >
          <CardBody>
            <Text as="b" fontSize="xl">
              Signup
            </Text>
            <form onSubmit={handleCreateAccount}>
              <Input
                type="email"
                placeholder="Enter email"
                size={{ base: "md", md: "lg" }}
                mt={{ base: "6", sm: "10", md: "20" }}
                mb={{ base: "3", sm: "5" }}
                focusBorderColor="#2f2f31"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormControl isInvalid={!matchPassword}>
                <InputGroup
                  mb={{ base: "3", sm: "5" }}
                  size={{ base: "md", md: "lg" }}
                  alignItems="center"
                >
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Create password"
                    focusBorderColor="#2f2f31"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Flex alignItems="center">
                    <InputRightElement
                      width="4.5rem"
                      h="100%"
                      onClick={handleClick}
                    >
                      {show ? (
                        <ViewOffIcon color="gray" />
                      ) : (
                        <ViewIcon color="gray" />
                      )}
                    </InputRightElement>
                  </Flex>
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={!matchPassword}>
                <InputGroup
                  mb={{ base: "3", sm: "5" }}
                  size={{ base: "md", md: "lg" }}
                >
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    focusBorderColor="#2f2f31"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </InputGroup>
                {!matchPassword && (
                  <FormErrorMessage mt="-4" mb="2">
                    Password doesnt match!
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                colorScheme="nigga"
                mt={{ base: "2", sm: "10" }}
                w="100%"
                size={{ base: "md", md: "lg" }}
              >
                Create account
              </Button>
            </form>

            <Link as={ReactLink} to="/login" style={{ textDecoration: "none" }}>
              <Text
                _hover={{ color: "black" }}
                color="gray"
                mt={{ base: "2", sm: "5" }}
                fontSize={{ base: "xs", sm: "sm" }}
                align="center"
              >
                Already have an account login. 🥱
              </Text>
            </Link>
          </CardBody>
        </Card>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
