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
  Box,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";

// Components
import HeaderLink from "./headerlink";
import Drawer from "./drawer";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
        <Box display={{ base: "block", md: "none" }}>
          <Drawer />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
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
                <MenuItem onClick={toggleColorMode}>
                  {colorMode === "light" ? "Darkmode" : "Lightmode"}
                </MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </Flex>

      <Divider />
    </>
  );
};

export default Header;
