import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  Text,
  Flex,
  Button,
  Input,
  Icon,
  Tooltip,
  Stack,
  Skeleton,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";
import useGetApplication from "../../hooks/application/useGetApplication";
import useUpdateApplication from "../../hooks/application/useUpdateApplication";

interface ApplicationInput {
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

const UpdateApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { id } = useParams();
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
          Update application
        </Text>
      </Flex>

      <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto">
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
            <Text mt="18" mb="2" fontSize="lg" fontWeight="500">
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
                  {errors.position_applied && errors.position_applied.message}
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
    </Container>
  );
};

export default UpdateApplicationForm;
