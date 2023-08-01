import React from "react";
import {
  Container,
  Text,
  Flex,
  Divider,
  Button,
  VStack,
  // FormControl,
  // FormLabel,
  // Switch,
  Box,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

// Hooks
import { useAuth } from "../utils/AuthContext";
import useCustomTitle from "../hooks/useCustomTitle";
// import EditProfileModal from "./profile/EditProfileModal";
import ProfileAvatar from "../components/ProfileAvatar";

const Profile: React.FC = () => {
  const { user, userAvatar } = useAuth();
  useCustomTitle(`AppliTrak - ${user.name}`);
  const toast = useToast();

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleShow = () => {
    toast({
      title: "Function is in development.",
      variant: "left-accent",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Profile
        </Text>
      </Flex>

      <VStack align="center" mt="5" spacing="1" mb="2">
        <ProfileAvatar user={user} avatar={userAvatar} />

        <Text as="b" fontSize="lg">
          {user.name}
        </Text>
        <Button
          leftIcon={<EditIcon />}
          colorScheme="nigga"
          size="sm"
          variant="ghost"
          onClick={handleShow}
        >
          Edit Profile
        </Button>
        {/* <EditProfileModal isOpen={isOpen} onClose={onClose} /> */}
      </VStack>
      <Divider />
      <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto" mt="4">
        {/* <Flex mb="4" fontWeight={500} alignItems="center">
          <Text>Old password</Text>
          <Spacer />
          <Input
            type="text"
            variant="filled"
            htmlSize={20}
            width="auto"
            defaultValue="Old password"
          />
        </Flex> */}
        <Divider mb="10" />
        {/* <Text as="b" fontSize="lg">
          Automation
        </Text>
        <FormControl display="flex" alignItems="center" mt="2" mb="4">
          <FormLabel
            htmlFor="email-alerts"
            mb="0"
            flex="1"
            pr="4"
            fontWeight={500}
          >
            Enable auto fetch company info
          </FormLabel>
          <Switch id="email-alerts" colorScheme="nigga" />
        </FormControl>
        <Divider />
        <FormControl display="flex" alignItems="center" mt="2" mb="4">
          <FormLabel
            htmlFor="email-alerts"
            mb="0"
            flex="1"
            pr="4"
            fontWeight={500}
          >
            Enable integration with the extension
          </FormLabel>
          <Switch id="email-alerts" colorScheme="nigga" />
        </FormControl>
        <Divider />
        <FormControl display="flex" alignItems="center" mt="2" mb="4">
          <FormLabel
            htmlFor="email-alerts"
            mb="0"
            flex="1"
            pr="4"
            fontWeight={500}
          >
            Automatically change application status to no feedback if the
            application have no follow up for a month.
          </FormLabel>
          <Switch id="email-alerts" colorScheme="nigga" />
        </FormControl>
        <Divider mb="10" /> */}

        <Text as="b" fontSize="lg">
          Account
        </Text>
        <Flex mt="2" mb="4" fontWeight={500} alignItems="center">
          <Text>Delete your account.</Text>
          <Spacer />
          <Button colorScheme="red" variant="ghost" size="sm">
            Delete
          </Button>
        </Flex>
        <Divider />
      </Box>
    </Container>
  );
};

export default Profile;
