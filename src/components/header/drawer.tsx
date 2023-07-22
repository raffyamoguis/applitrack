import React from "react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  VStack,
  HStack,
  Text,
  StackDivider,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { IconMenuDeep } from "@tabler/icons-react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import HeaderLink from "./headerlink";
import { useAuth } from "../../utils/AuthContext";

const drawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { handleUserLogout } = useAuth();

  return (
    <>
      <HStack spacing="10px" align="center">
        <Icon
          _hover={{ color: "black" }}
          color="gray"
          as={colorMode === "light" ? MoonIcon : SunIcon}
          onClick={toggleColorMode}
        />
        <IconButton
          aria-label="Show drawer."
          colorScheme="gray"
          variant="ghost"
          icon={<IconMenuDeep />}
          onClick={onOpen}
        />
      </HStack>
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Account</DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={3}
              align="stretch"
            >
              <HeaderLink title="Overview" to="/" />
              <HeaderLink title="Applications" to="/applications" />
              <HeaderLink title="Profile" to="/profile" />
              <Text onClick={handleUserLogout}>Logout</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default drawer;
