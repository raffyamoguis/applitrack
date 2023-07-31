import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Text,
  Divider,
  Spacer,
  Center,
  // FormControl,
  // FormErrorMessage,
  Input,
  // VStack,
  Flex,
} from "@chakra-ui/react";

import ProfileAvatar from "../../components/ProfileAvatar";
import { useAuth } from "../../utils/AuthContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // console.log(user);
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "sm", md: "xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {" "}
          <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
            Edit Profile
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody pb={6}>
          <Center>
            {/* <Box
              position="relative"
              display="inline-block"
              _hover={{
                "& > div": {
                  opacity: 1,
                },
              }}
            >
              <Avatar
                size="xl"
                name={user.name}
                src="https://bit.ly/sage-adebayo"
              />

              <Flex
                position="absolute"
                bottom="0"
                left="50%"
                transform="translateX(-50%)"
                bg="gray.100"
                rounded="full"
                boxShadow="md"
                p="1"
                opacity="0"
                transition="opacity 0.2s"
                cursor="pointer"
              >
                <Icon as={EditIcon} boxSize={4} color="gray.500" />
              </Flex>
            </Box> */}
            <ProfileAvatar user={user} />
          </Center>

          <Flex mt="10" mb="4" fontWeight={500} alignItems="center">
            <Text>Name</Text>
            <Spacer />
            <Input
              type="text"
              variant="filled"
              htmlSize={20}
              width="auto"
              defaultValue={user?.name}
            />
          </Flex>
          <Divider />
          <Flex mt="2" mb="4" fontWeight={500} alignItems="center">
            <Text>Email</Text>
            <Spacer />
            <Input
              type="email"
              variant="filled"
              htmlSize={20}
              width="auto"
              defaultValue={user?.email}
            />
          </Flex>
          <Divider />
          <Flex mt="2" mb="2" fontWeight={500} alignItems="center">
            <Text>Update password</Text>
            <Spacer />
            <Input
              type="text"
              variant="filled"
              htmlSize={20}
              width="auto"
              defaultValue="New password"
            />
          </Flex>
          <Flex mb="4" fontWeight={500} alignItems="center">
            {/* <Text>Password</Text> */}
            <Spacer />
            <Input
              type="text"
              variant="filled"
              htmlSize={20}
              width="auto"
              defaultValue="Confirm password"
            />
          </Flex>
          <Flex mb="4" fontWeight={500} alignItems="center">
            <Text>Old password</Text>
            <Spacer />
            <Input
              type="text"
              variant="filled"
              htmlSize={20}
              width="auto"
              defaultValue="Old password"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
