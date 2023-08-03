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
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/AuthContext";
import useCustomTitle from "../../hooks/useCustomTitle";

interface FormInput {
  name: string;
  email: string;
  password: string;
  cpassword: string;
}

const Login: React.FC = () => {
  useCustomTitle("AppliTrak - Signup");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { isCreatingAcc, handleUserRegister } = useAuth();

  const onSubmit = (data: FormInput) => {
    handleUserRegister(data);
  };

  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter p="4" color="gray" axis="both">
        <Text mb="2" fontSize={{ base: "xs", sm: "sm" }} align="center">
          Signup to use this awesome application. 🤨
        </Text>
        <Card
          boxSize={{ base: "xs", sm: "md", md: "xl" }}
          h={{ base: "md", sm: "lg" }}
          borderRadius="xl"
          variant="outline"
          shadow="sm"
          p={{ base: "2", sm: "4" }}
        >
          <CardBody>
            <Text as="b" fontSize="xl">
              Signup
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name?.message}>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  size={{ base: "md", md: "lg" }}
                  mt={{ base: "6", sm: "10", md: "20" }}
                  mb={{ base: "3", sm: "5" }}
                  focusBorderColor="#2f2f31"
                  {...register("name", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage mt="-4" mb="2">
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email?.message}>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter email"
                  size={{ base: "md", md: "lg" }}
                  mb={{ base: "3", sm: "5" }}
                  focusBorderColor="#2f2f31"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
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
                    id="password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Create password"
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

              <FormControl isInvalid={!!errors.cpassword?.message}>
                <InputGroup
                  mb={{ base: "3", sm: "5" }}
                  size={{ base: "md", md: "lg" }}
                >
                  <Input
                    id="cpassword"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    focusBorderColor="#2f2f31"
                    {...register("cpassword", {
                      required: "This is required",
                      validate: (value) =>
                        value === watch("password") ||
                        "The passwords do not match",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage mt="-4" mb="2">
                  {errors.cpassword && errors.cpassword.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="nigga"
                mt={{ base: "2", sm: "10" }}
                w="100%"
                size={{ base: "md", md: "lg" }}
                isLoading={isCreatingAcc}
                loadingText="Creating account"
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
