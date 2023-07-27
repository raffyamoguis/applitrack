import React from "react";
import { Query } from "appwrite";
import {
  Card,
  CardBody,
  Flex,
  Spacer,
  Text,
  VStack,
  Icon,
  SkeletonText,
} from "@chakra-ui/react";
import { IconId } from "@tabler/icons-react";

// Hooks
import useApplicationCount from "../../../hooks/overview/useApplicationCount";
import { useAuth } from "../../../utils/AuthContext";

const NotSelected: React.FC = () => {
  const { user } = useAuth();

  const { data: applicationCount, isLoading } = useApplicationCount(
    [Query.equal("user_id", user?.$id), Query.equal("status", "Not Selected")],
    "notselectedTotal"
  );
  return (
    <Card borderRadius="xl" variant="outline" shadow="sm">
      <CardBody>
        {isLoading ? (
          <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
        ) : (
          <>
            <Flex alignItems="gray">
              <Text as="b" colorScheme="nigga" fontSize="lg">
                Not Selected
              </Text>

              <Spacer />
              <Icon as={IconId} />
            </Flex>
            <VStack align="start" mt="4" spacing={0}>
              <Text fontSize="3xl" as="b">
                {applicationCount}
              </Text>
              {/* <Text fontSize="sm">Keep going.</Text> */}
            </VStack>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default NotSelected;
