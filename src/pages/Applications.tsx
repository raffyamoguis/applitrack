import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Text,
  Container,
  Flex,
  Select,
  Button,
  Spacer,
} from "@chakra-ui/react";

// Componetns
import ApplicationCards from "../components/application/ApplicationCards";

const Applications: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Applications
        </Text>
      </Flex>
      <Flex alignItems="center" mt="10" gap="2">
        <Text fontSize="sm" as="b">
          300 total applications.
        </Text>

        <Spacer />

        <Select
          placeholder="Filter"
          size={{ base: "xs", sm: "sm", md: "md" }}
          w={100}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Button
          as={ReactLink}
          to="/applications/new"
          colorScheme="nigga"
          size={{ base: "xs", sm: "sm", md: "md" }}
        >
          Add New
        </Button>
      </Flex>
      <ApplicationCards />
    </Container>
  );
};

export default Applications;
