import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Query } from "appwrite";
import { Text, Container, Flex, Button, Spacer } from "@chakra-ui/react";
import { useAuth } from "../utils/AuthContext";
import useApplications from "../hooks/application/useApplications";

import OverviewCards from "../components/overview/OverviewCards";
import OverviewStats from "../components/overview/OverviewStats";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const { data: applications, isLoading } = useApplications([
    Query.equal("user_id", user?.$id),
    Query.orderAsc("$createdAt"),
  ]);

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
      {applications?.total !== 0 && !isLoading ? (
        <>
          <OverviewCards />
          <OverviewStats applications={applications.documents} />{" "}
        </>
      ) : (
        <Text>You don't have any applications for now.</Text>
      )}
    </Container>
  );
};

export default Dashboard;
