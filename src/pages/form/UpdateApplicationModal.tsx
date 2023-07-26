import React from "react";
import { useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Text,
  Box,
  Button,
  Input,
  Stack,
  Skeleton,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import useGetApplication from "../../hooks/application/useGetApplication";
import useUpdateApplication from "../../hooks/application/useUpdateApplication";

interface MyComponentProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

interface ApplicationInput {
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

const UpdateApplicationModal: React.FC<MyComponentProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const queryClient = useQueryClient();
  const toast = useToast();

  const useUpdateApplicationMutation = useUpdateApplication();
  const { data, isLoading, error } = useGetApplication(id);

  if (error) {
    console.log(error);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationInput>();

  const onSubmit = (application: ApplicationInput) => {
    useUpdateApplicationMutation.mutate(
      {
        documentID: data.$id,
        application: application,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("applications");
          toast({
            title: "Application updated.",
            description: "We've successfully updated your application.",
            status: "success",
            position: "bottom-right",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
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
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {" "}
          <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
            Update Application
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box m="auto">
            {isLoading ? (
              <Stack spacing="30px" mt="18">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            ) : (
              <>
                <Text fontSize="lg" fontWeight="500">
                  Company
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl isInvalid={!!errors.name?.message}>
                    <Input
                      mb="4"
                      type="text"
                      placeholder="Name"
                      defaultValue={data?.name}
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
                    defaultValue={data?.info}
                    {...register("info")}
                  />
                  <FormControl isInvalid={!!errors.position_applied?.message}>
                    <Input
                      mb="4"
                      type="text"
                      placeholder="Position"
                      defaultValue={data?.position_applied}
                      {...register("position_applied", {
                        required: "Position is required",
                      })}
                    />
                    <FormErrorMessage mt="-3" mb="2">
                      {errors.position_applied &&
                        errors.position_applied.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.status?.message}>
                    <Input
                      mb="4"
                      type="text"
                      placeholder="Status"
                      defaultValue={data?.status}
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
                    colorScheme="nigga"
                    mb="5"
                    isLoading={useUpdateApplicationMutation.isLoading}
                    loadingText="Updating"
                    type="submit"
                  >
                    Update
                  </Button>
                </form>
              </>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UpdateApplicationModal;
