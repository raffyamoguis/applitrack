import React, { useState } from "react";
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
  const [totalApplications, setTotalApplications] = useState<number>(0);

  const handleTotalApplications = (total: number) => {
    // Update parent component state or perform actions with the received data
    setTotalApplications(total);
  };
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Applications
        </Text>
      </Flex>

      <Flex alignItems="center" mt="10" gap="2">
        <Text fontSize="sm" as="b">
          {totalApplications} total applications.
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
      <ApplicationCards sendTotalApplications={handleTotalApplications} />
    </Container>
  );
};

export default Applications;
