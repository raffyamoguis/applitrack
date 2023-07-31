import React from "react";
import { useLocation, Link as ReactLink } from "react-router-dom";
import {
  Flex,
  Spacer,
  Divider,
  HStack,
  Switch,
  FormControl,
  FormLabel,
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

import { useAuth } from "../../utils/AuthContext";

const Header: React.FC = () => {
  const location = useLocation();
  const { handleUserLogout, userAvatar } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerDevice] = useMediaQuery("(max-width: 600px)");

  // Define an array of routes where the header should not be displayed
  const headerHiddenRoutes = ["/login", "/signup"];

  // Check if the current route is in the headerHiddenRoutes array
  const isHeaderHidden = headerHiddenRoutes.includes(location.pathname);

  // Render the header only if it should be visible
  if (isHeaderHidden) {
    return null;
  }

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

            <Menu closeOnSelect={false}>
              <MenuButton>
                <Avatar
                  size={`${isSmallerDevice ? "sm" : "md"}`}
                  name="Raffy Amoguis"
                  src={userAvatar}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      htmlFor="darkmode-switch"
                      mb="0"
                      flex="1"
                      pr="4"
                      fontWeight={500}
                    >
                      Darkmode
                    </FormLabel>
                    <Switch
                      id="darkmode-switch"
                      colorScheme="nigga"
                      isChecked={colorMode === "dark"}
                      onChange={toggleColorMode}
                    />
                  </FormControl>
                </MenuItem>
                <MenuItem as={ReactLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
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
