import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";
import useGetApplication from "../../hooks/application/useGetApplication";

const UpdateApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useGetApplication(id);

  const [name, updateName] = useState<string>("");
  const [info, updateInfo] = useState<string>("");
  const [position, updatePosition] = useState<string>("");
  const [status, updateStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, info, position, status);

    // Check if there's an update
    if (name !== "" || info !== "" || position !== "" || status !== "") {
      console.log("There's a change.");

      // Set the previous data
    }
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

            <form onSubmit={handleSubmit}>
              <Input
                mb="4"
                type="text"
                placeholder="Name"
                defaultValue={data?.name}
                // value={name}
                onChange={(e) => updateName(e.target.value)}
                required
              />
              <Input
                mb="4"
                type="text"
                placeholder="Info"
                defaultValue={data?.info}
                // value={info}
                onChange={(e) => updateInfo(e.target.value)}
              />
              <Input
                mb="4"
                type="text"
                placeholder="Position"
                defaultValue={data?.position_applied}
                // value={position}
                onChange={(e) => updatePosition(e.target.value)}
                required
              />
              <Input
                mb="4"
                type="text"
                placeholder="Status"
                defaultValue={data?.status}
                // value={status}
                onChange={(e) => updateStatus(e.target.value)}
                required
              />
              <Button
                w="100%"
                colorScheme="nigga"
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
