import React from "react";
import {
  Flex,
  Spacer,
  Divider,
  HStack,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";

// Components
import HeaderLink from "./headerlink";
import Drawer from "./drawer";

const Header: React.FC = () => {
  const [isSmallerDevice] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p={isSmallerDevice ? 2 : 4}
      >
        <Text fontSize={{ base: "xl", sm: "3xl" }} as="b">
          AppliTrak
        </Text>

        <Spacer />
        {isSmallerDevice ? (
          <Drawer />
        ) : (
          <HStack spacing="20px">
            <HeaderLink title="Overview" to="/" />
            <HeaderLink title="Applications" to="applications" />

            <Menu>
              <MenuButton>
                <Avatar
                  size={`${isSmallerDevice ? "sm" : "md"}`}
                  name="Raffy Amoguis"
                  src="https://bit.ly/ryan-florence"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Darkmode</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}
      </Flex>

      <Divider />
    </>
  );
};

export default Header;
