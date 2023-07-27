import React from "react";
import { Query } from "appwrite";
import { Link as ReactLink } from "react-router-dom";
import { Text, Container, Flex, Button, Spacer } from "@chakra-ui/react";

import ShowOverview from "../components/overview/ShowOverview";

// Hooks
import { useAuth } from "../utils/AuthContext";
import useApplicationCount from "../hooks/overview/useApplicationCount";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const {
    data: applicationCount,
    isSuccess,
    isLoading,
  } = useApplicationCount([Query.equal("user_id", user?.$id)]);

  const showOverview = applicationCount !== 0 && isSuccess;

  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mt="5" gap="2">
        <Text fontSize={{ base: "xl", sm: "2xl" }} as="b">
          Overview
        </Text>
        <Spacer />
        <Button
          as={ReactLink}
          colorScheme="nigga"
          size={{ base: "xs", sm: "sm", md: "md" }}
          to="/applications/new"
        >
          Add New
        </Button>
      </Flex>
      <ShowOverview isLoading={isLoading} showOverview={showOverview} />
    </Container>
  );
};

export default Dashboard;
