import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalContent,
  Button,
  Box,
  Text,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import useAddApplication from "../../hooks/application/useAddApplication";
import { useAuth } from "../../utils/AuthContext";

interface MyComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationInput {
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

const ApplicationFormModal: React.FC<MyComponentProps> = ({
  isOpen,
  onClose,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const queryClient = useQueryClient();
  const toast = useToast();
  const useAddApplicationMutation = useAddApplication();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationInput>();

  const onSubmit = (application: ApplicationInput) => {
    useAddApplicationMutation.mutate(
      {
        name: application.name,
        info: application.info,
        position_applied: application.position_applied,
        status: application.status,
        user_id: user.$id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("applications");
          toast({
            title: "Application created.",
            status: "success",
            position: "bottom-right",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
          reset();
        },
      }
    );
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "sm", md: "md" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {" "}
          <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
            Create new
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box m="auto">
            <Text fontSize="lg" fontWeight="500" mb="2">
              Company
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name?.message}>
                <Input
                  mb="4"
                  type="text"
                  placeholder="Name"
                  size={{ base: "sm", md: "md" }}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                <FormErrorMessage mt="-3" mb="2">
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Input
                mb="4"
                type="text"
                placeholder="Info"
                size={{ base: "sm", md: "md" }}
                {...register("info")}
              />
              <FormControl isInvalid={!!errors.position_applied?.message}>
                <Input
                  mb="4"
                  type="text"
                  placeholder="Position"
                  size={{ base: "sm", md: "md" }}
                  {...register("position_applied", {
                    required: "Position is required",
                  })}
                />
                <FormErrorMessage mt="-3" mb="2">
                  {errors.position_applied && errors.position_applied.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.status?.message}>
                <Input
                  mb="4"
                  type="text"
                  placeholder="Status"
                  defaultValue="Applied"
                  size={{ base: "sm", md: "md" }}
                  {...register("status", {
                    required: "Status is required",
                  })}
                />
                <FormErrorMessage mt="-3" mb="2">
                  {errors.status && errors.status.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                w="100%"
                mb="4"
                colorScheme="nigga"
                size={{ base: "sm", md: "md" }}
                isLoading={useAddApplicationMutation.isLoading}
                loadingText="Creating"
                type="submit"
              >
                Create
              </Button>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationFormModal;
