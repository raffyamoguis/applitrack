import React from "react";
import { Flex, Spacer, Divider, HStack, Avatar, Text } from "@chakra-ui/react";

// Components
import HeaderLink from "./headerlink";

const Header: React.FC = () => {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Text fontSize="3xl" as="b">
          AppliTrak
        </Text>

        <Spacer />
        <HStack spacing="20px">
          <HeaderLink title="Overview" to="/" />
          <HeaderLink title="Applications" to="applications" />
          <Avatar
            size="md"
            name="Raffy Amoguis"
            src="https://bit.ly/ryan-florence"
          />
        </HStack>
      </Flex>

      <Divider />
    </>
  );
};

export default Header;
