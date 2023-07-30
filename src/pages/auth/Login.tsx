import React, { useState, useEffect } from "react";
import { useNavigate, Link as ReactLink } from "react-router-dom";
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

// Hooks
import { useAuth } from "../../utils/AuthContext";
import { useForm } from "react-hook-form";
import useCustomTitle from "../../hooks/useCustomTitle";

interface CredentialsProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  useCustomTitle("AppliTrak - Login");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { user, isLoggingIn, handleUserLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsProps>();

  useEffect(() => {
    // Faulty guard.
    if (user) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data: CredentialsProps) => {
    handleUserLogin(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.email?.message}>
                <Input
                  type="text"
                  placeholder="Enter email"
                  size={{ base: "md", md: "lg" }}
                  mt={{ base: "10", md: "20" }}
                  mb={{ base: "3", sm: "5" }}
                  focusBorderColor="#2f2f31"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />{" "}
                <FormErrorMessage mt="-4" mb="2">
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password?.message}>
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
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
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
                <FormErrorMessage mt="-4" mb="2">
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="nigga"
                w="100%"
                mt={{ base: "4", sm: "10" }}
                size={{ base: "md", md: "lg" }}
                isLoading={isLoggingIn}
                loadingText="Logging in"
              >
                Login
              </Button>
            </form>

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
