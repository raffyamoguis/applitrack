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

import OverviewCards from "../components/overview/OverviewCards";
import OverviewStats from "../components/overview/OverviewStats";

const Dashboard: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Overview
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
          colorScheme="nigga"
          size={{ base: "xs", sm: "sm", md: "md" }}
          to="/applications/new"
        >
          Add New
        </Button>
      </Flex>
      <OverviewCards />
      <OverviewStats />
    </Container>
  );
};

export default Dashboard;
