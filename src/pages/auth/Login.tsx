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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter p="4" color="gray" axis="both">
        <Text mb="2" fontSize="sm" align="center">
          Login to use this awesome application. 🤨
        </Text>
        <Card
          boxSize="lg"
          borderRadius="xl"
          variant="outline"
          shadow="sm"
          p="4"
        >
          <CardBody>
            <Text as="b" fontSize="xl">
              Login
            </Text>

            <Input
              placeholder="Enter email"
              size="lg"
              mt="20"
              mb="5"
              focusBorderColor="#2f2f31"
            />
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                focusBorderColor="#2f2f31"
              />
              <InputRightElement width="4.5rem" onClick={handleClick}>
                {show ? (
                  <ViewOffIcon color="gray" />
                ) : (
                  <ViewIcon color="gray" />
                )}
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="nigga" mt="10" w="100%">
              Login
            </Button>

            <Link
              as={ReactLink}
              to="/signup"
              style={{ textDecoration: "none" }}
            >
              <Text
                _hover={{ color: "gray" }}
                mt="5"
                fontSize="sm"
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
