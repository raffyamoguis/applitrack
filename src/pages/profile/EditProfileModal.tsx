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
  Avatar,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";
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
          <Text>Avatar</Text>
          <Center>
            <Avatar
              size="xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </Center>
          <Text>Name</Text>
          <Center>
            {/* <VStack spacing={4} width="100%" maxWidth="400px">
              <FormControl> */}
            <Input
              width="50%"
              mb="4"
              type="text"
              variant="filled"
              placeholder="Name"
              size={{ base: "sm", md: "md" }}
              defaultValue={user?.name}
            />
            {/* <FormErrorMessage mt="-3" mb="2">
                  {/* {errors.name && errors.name.message} 
                </FormErrorMessage>
              </FormControl>
            </VStack> */}
          </Center>
          <Text>Email</Text>
          <Center>
            <Input
              width="50%"
              mb="4"
              type="text"
              variant="filled"
              placeholder="Update email"
              size={{ base: "sm", md: "md" }}
              defaultValue={user?.email}
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
