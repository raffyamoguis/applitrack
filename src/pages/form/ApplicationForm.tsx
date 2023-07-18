import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Flex,
  Button,
  Input,
  Icon,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";
import { useQueryClient } from "react-query";

import useAddApplication from "../../hooks/useAddApplication";

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const useAddApplicationMutation = useAddApplication();
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [status, setStatus] = useState<string>("Applied");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    useAddApplicationMutation.mutate(
      {
        name: name,
        info: info,
        position_applied: position,
        status: status,
        // user_id: newItem.user_id,
      },
      {
        onSuccess: () => {
          // Invalidate and refetch relevant queries after successful addition
          queryClient.invalidateQueries("applications");
          // Show toast
          toast({
            title: "Application created.",
            description: "We've created your application for you.",
            status: "success",
            position: "bottom-right",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
          // Reset form
          setName("");
          setInfo("");
          setPosition("");
          setStatus("Applied");
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
          Create new
        </Text>
      </Flex>

      <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto">
        <Text mt="18" mb="2" fontSize="lg" fontWeight="500">
          Company
        </Text>

        <form onSubmit={handleSubmit}>
          <Input
            mb="4"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            mb="4"
            type="text"
            placeholder="Info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <Input
            mb="4"
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <Input
            mb="4"
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
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
