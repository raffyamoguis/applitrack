import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter p="4" color="gray" axis="both">
        <Text mb="2" align="center" fontSize={{ base: "xs", sm: "sm" }}>
          Login to use this awesome application. 🤨
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
              Login
            </Text>

            <Input
              placeholder="Enter email"
              size={{ base: "md", md: "lg" }}
              mt={{ base: "10", md: "20" }}
              mb={{ base: "3", sm: "5" }}
              focusBorderColor="#2f2f31"
            />
            <InputGroup
              mb={{ base: "3", sm: "5" }}
              size={{ base: "md", md: "lg" }}
              alignItems="center"
            >
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                focusBorderColor="#2f2f31"
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
            <Button
              colorScheme="nigga"
              w="100%"
              mt={{ base: "4", sm: "10" }}
              size={{ base: "md", md: "lg" }}
            >
              Login
            </Button>

            <Link
              as={ReactLink}
              to="/signup"
              style={{ textDecoration: "none" }}
            >
              <Text
                _hover={{ color: "black" }}
                color="gray"
                mt={{ base: "3", sm: "5" }}
                fontSize={{ base: "xs", sm: "sm" }}
                align="center"
              >
                Dont have an account create one. 😌
              </Text>
            </Link>
          </CardBody>
        </Card>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
