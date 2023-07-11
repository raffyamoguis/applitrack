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
  StackDivider,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { IconMenuDeep } from "@tabler/icons-react";
import { IconBrightness, IconBrightnessOff } from "@tabler/icons-react";

import HeaderLink from "./headerlink";

const drawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Icon
        as={colorMode === "light" ? IconBrightnessOff : IconBrightness}
        onClick={toggleColorMode}
      />
      <IconButton
        aria-label="Show drawer."
        colorScheme="gray"
        variant="ghost"
        icon={<IconMenuDeep />}
        onClick={onOpen}
      />
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
              <HeaderLink title="Logout" to="/logout" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default drawer;
