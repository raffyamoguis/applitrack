import React from "react";
import {
  Container,
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    // <Container maxW="container.xl">
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
      <Divider />
    </>
    // </Container>
  );
};

export default Header;
