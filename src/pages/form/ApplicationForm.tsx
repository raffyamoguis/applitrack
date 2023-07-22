import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  Text,
  Flex,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  Icon,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";
import { useQueryClient } from "react-query";

import useAddApplication from "../../hooks/application/useAddApplication";

interface ApplicationInput {
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const useAddApplicationMutation = useAddApplication();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationInput>();

  const onSubmit = (application: ApplicationInput) => {
    useAddApplicationMutation.mutate(application, {
      onSuccess: () => {
        queryClient.invalidateQueries("applications");
        toast({
          title: "Application created.",
          description: "We've created your application for you.",
          status: "success",
          position: "bottom-right",
          variant: "left-accent",
          duration: 5000,
          isClosable: true,
        });
        reset({});
      },
    });
  };

  return (
    <Container maxW="container.md">
      <Flex alignItems="center" mt="4" gap={1}>
        <Tooltip hasArrow label="Go back" fontSize="sm">
          <Icon
            as={IconChevronLeft}
            boxSize={6}
            _hover={{ color: "gray" }}
            onClick={() => navigate(-1)}
          />
        </Tooltip>
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Create new
        </Text>
      </Flex>

      <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto">
        <Text mt="18" mb="2" fontSize="lg" fontWeight="500">
          Company
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name?.message}>
            <Input
              mb="4"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <FormErrorMessage mt="-3" mb="2">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Input mb="4" type="text" placeholder="Info" {...register("info")} />
          <FormControl isInvalid={!!errors.position_applied?.message}>
            <Input
              mb="4"
              type="text"
              placeholder="Position"
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
            isLoading={useAddApplicationMutation.isLoading}
            loadingText="Creating"
            type="submit"
          >
            Create
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ApplicationForm;
