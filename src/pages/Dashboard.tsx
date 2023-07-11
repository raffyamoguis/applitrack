import React from "react";
import { Text, Container, Flex, Box, Select, Button } from "@chakra-ui/react";

import OverviewCards from "../components/overview/OverviewCards";
import OverviewStats from "../components/overview/OverviewStats";

const Dashboard: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Text fontSize="2xl" as="b" mt="10px">
        Overview
      </Text>
      <Flex justifyContent="end" gap="2">
        <Box w="100">
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Button>Add New</Button>
      </Flex>
      <OverviewCards />
      <OverviewStats />
    </Container>
  );
};

export default Dashboard;
