import React from "react";
import {
  Flex,
  Spacer,
  Divider,
  HStack,
  Avatar,
  Container,
} from "@chakra-ui/react";

// Components
import HeaderLink from "./headerlink";

const Header: React.FC = () => {
  return (
    // <Container maxW="container.xl">
    <>
      <Container maxW="container.xl">
        <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
          <HStack spacing="20px">
            <HeaderLink title="AppliTrak" fontSize="3xl" as="b" />
            <HeaderLink title="Dashboard" />
            <HeaderLink title="Applications" />
          </HStack>
          <Spacer />
          <Avatar
            size="md"
            name="Raffy Amoguis"
            src="https://bit.ly/ryan-florence"
          />
        </Flex>
      </Container>

      <Divider />
    </>
    // </Container>
  );
};

export default Header;
