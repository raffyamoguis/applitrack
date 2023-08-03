import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Card,
  CardBody,
  Button,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const UpdatePassword: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Card variant="outline" shadow="sm" borderRadius="xl" mb="4">
      <CardBody>
        <form>
          <FormControl>
            <FormLabel fontSize="sm">Old password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
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
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl mt="4">
            <FormLabel fontSize="sm">New password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
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
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Box textAlign="right">
            <Button colorScheme="nigga" mt="5" size="sm" isDisabled>
              Update
            </Button>
          </Box>
        </form>
      </CardBody>
    </Card>
  );
};

export default UpdatePassword;
